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

  if (!archiveList) return;

  const entries      = Array.from(archiveList.querySelectorAll('.archive-entry'));
  let activeTag      = null;
  let activeSection  = 'all';
  let searchQuery    = '';

  // ── Filter engine ─────────────────────────────────────────────
  function filter() {
    let visible = 0;

    entries.forEach(function (entry) {
      const title   = (entry.dataset.title   || '').toLowerCase();
      const section = (entry.dataset.section || '').toLowerCase();
      const tags    = (entry.dataset.tags    || '').toLowerCase();
      const fields  = (entry.dataset.fields  || '').toLowerCase();

      const matchQuery   = !searchQuery || title.includes(searchQuery) || tags.includes(searchQuery) || fields.includes(searchQuery);
      const matchTag     = !activeTag   || tags.includes(activeTag.toLowerCase());
      const matchSection = activeSection === 'all' || section === activeSection;

      const show = matchQuery && matchTag && matchSection;
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

  // ── Search input ───────────────────────────────────────────────
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = this.value.trim().toLowerCase();
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
  filter();

})();
