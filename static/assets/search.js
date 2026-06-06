/* search.js — Archive page: text + section + tag + year combined filtering */
(function () {
  'use strict';

  var searchInput = document.getElementById('archive-search');
  var searchCount = document.getElementById('search-count');
  var listEl      = document.getElementById('archive-list');
  var noResults   = document.getElementById('no-results');
  var tagCloud    = document.getElementById('tag-cloud');
  var tabsEl      = document.getElementById('section-tabs');
  var yearsEl     = document.getElementById('year-filters');
  var clearBtn    = document.getElementById('clear-tag');

  if (!listEl) return;

  var entries       = Array.from(listEl.querySelectorAll('.archive-entry'));
  var activeTag     = null;
  var activeSection = 'all';
  var activeYear    = 'all';
  var query         = '';

  function run() {
    var visible = 0;
    entries.forEach(function (el) {
      var ok =
        (!query       || (el.dataset.title  || '').includes(query)
                      || (el.dataset.tags   || '').includes(query)
                      || (el.dataset.fields || '').includes(query)) &&
        (!activeTag   || (el.dataset.tags   || '').includes(activeTag.toLowerCase())) &&
        (activeSection === 'all' || el.dataset.section === activeSection) &&
        (activeYear   === 'all' || el.dataset.year    === activeYear);

      el.style.display = ok ? '' : 'none';
      if (ok) visible++;
    });
    if (searchCount) searchCount.textContent = visible + ' / ' + entries.length;
    if (noResults)   noResults.style.display = visible === 0 ? '' : 'none';
  }

  /* Search input */
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      query = this.value.trim().toLowerCase();
      run();
    });
  }

  /* Section tabs */
  if (tabsEl) {
    tabsEl.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        tabsEl.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('tab-btn--active'); });
        this.classList.add('tab-btn--active');
        activeSection = this.dataset.section;
        run();
      });
    });
  }

  /* Year filter */
  if (yearsEl) {
    yearsEl.querySelectorAll('.year-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        yearsEl.querySelectorAll('.year-btn').forEach(function (b) { b.classList.remove('year-btn--active'); });
        this.classList.add('year-btn--active');
        activeYear = this.dataset.year;
        run();
      });
    });
  }

  /* Tag cloud */
  if (tagCloud) {
    tagCloud.querySelectorAll('.tag-btn[data-tag]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var t = this.dataset.tag;
        if (activeTag === t) {
          activeTag = null;
          tagCloud.querySelectorAll('.tag-btn').forEach(function (b) { b.classList.remove('is-active'); });
        } else {
          activeTag = t;
          tagCloud.querySelectorAll('.tag-btn').forEach(function (b) { b.classList.remove('is-active'); });
          this.classList.add('is-active');
        }
        run();
      });
    });
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        activeTag = null;
        tagCloud.querySelectorAll('.tag-btn').forEach(function (b) { b.classList.remove('is-active'); });
        run();
      });
    }
  }

  run();
})();
