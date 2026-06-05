/* search.js — Archive page client-side filter
   Handles: text search, tag filter, section tab filter
   Works with the server-rendered list in layouts/page/archive.html
*/

(function () {
  'use strict';

  const searchInput  = document.getElementById('archive-search');
  const searchCount  = document.getElementById('search-count');
  const archiveList  = document.getElementById('archive-list');
  const noResults    = document.getElementById('no-results');
  const tagCloud     = document.getElementById('tag-cloud');
  const sectionTabs  = document.getElementById('section-tabs');
  const clearTagBtn  = document.getElementById('clear-tag');
  const areaFilter   = document.getElementById('area-filter');
  const yearFilter   = document.getElementById('year-filter');

  if (!archiveList) return;

  const entries      = Array.from(archiveList.querySelectorAll('.archive-entry'));
  let activeTag      = null;
  let activeSection  = 'all';
  let searchQuery    = '';
  let activeArea     = '';
  let activeYear     = '';

  // ── Filter engine ─────────────────────────────────────────────
  function filter() {
    let visible = 0;

    entries.forEach(function (entry) {
      const title   = (entry.dataset.title   || '').toLowerCase();
      const section = (entry.dataset.section || '').toLowerCase();
      const tags    = (entry.dataset.tags    || '').toLowerCase();
      const fields  = (entry.dataset.fields  || '').toLowerCase();
      const areas   = (entry.dataset.areas   || '').toLowerCase();
      const year    = entry.dataset.year || '';

      const matchQuery   = !searchQuery || title.includes(searchQuery) || tags.includes(searchQuery) || fields.includes(searchQuery) || areas.includes(searchQuery);
      const matchTag     = !activeTag   || tags.includes(activeTag.toLowerCase());
      const matchSection = activeSection === 'all' || section === activeSection;
      const matchArea    = !activeArea || areas.includes(activeArea);
      const matchYear    = !activeYear || year === activeYear;

      const show = matchQuery && matchTag && matchSection && matchArea && matchYear;
      entry.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (searchCount) {
      searchCount.textContent = visible + ' / ' + entries.length + ' 条 / entries';
    }

    if (noResults) {
      noResults.style.display = visible === 0 ? '' : 'none';
    }
  }

  function readQueryFilters() {
    const params = new URLSearchParams(window.location.search);
    searchQuery = (params.get('q') || '').trim().toLowerCase();
    activeTag = (params.get('tag') || '').trim().toLowerCase() || null;
    activeArea = (params.get('area') || '').trim().toLowerCase();
    activeYear = (params.get('year') || '').trim();

    if (searchInput && searchQuery) searchInput.value = searchQuery;
    if (areaFilter && activeArea) areaFilter.value = activeArea;
    if (yearFilter && activeYear) yearFilter.value = activeYear;
  }

  // ── Search input ───────────────────────────────────────────────
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = this.value.trim().toLowerCase();
      filter();
    });
  }

  if (areaFilter) {
    areaFilter.addEventListener('change', function () {
      activeArea = this.value.toLowerCase();
      filter();
    });
  }

  if (yearFilter) {
    yearFilter.addEventListener('change', function () {
      activeYear = this.value;
      filter();
    });
  }

  // ── Tag cloud ──────────────────────────────────────────────────
  if (tagCloud) {
    tagCloud.querySelectorAll('.tag-btn[data-tag]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (activeTag === this.dataset.tag) {
          activeTag = null;
          this.classList.remove('is-active');
        } else {
          tagCloud.querySelectorAll('.tag-btn').forEach(function (b) { b.classList.remove('is-active'); });
          activeTag = this.dataset.tag;
          this.classList.add('is-active');
        }
        filter();
      });
    });

    if (clearTagBtn) {
      clearTagBtn.addEventListener('click', function () {
        activeTag = null;
        tagCloud.querySelectorAll('.tag-btn').forEach(function (b) { b.classList.remove('is-active'); });
        filter();
      });
    }
  }

  // ── Section tabs ───────────────────────────────────────────────
  if (sectionTabs) {
    sectionTabs.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        sectionTabs.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('tab-btn--active'); });
        this.classList.add('tab-btn--active');
        activeSection = this.dataset.section;
        filter();
      });
    });
  }

  // ── Initial count ──────────────────────────────────────────────
  readQueryFilters();
  filter();

})();
