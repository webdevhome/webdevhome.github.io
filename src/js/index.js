import fuzzy from 'fuzzysort'

const $id = id => document.getElementById(id)
const $$class = className => Array.from(document.getElementsByClassName(className))

const state = {
  _searchActive: false,
  get searchActive() { return this._searchActive },
  set searchActive(value) {
    this._searchActive = value
    $id('page-search-container').classList.toggle('page-search--is-active', value)
    $id('page-content').classList.toggle('page-content--is-filtering', value)

    if (value) {
      $id('page-search-input').focus()
    } else {
      $id('page-search-input').value = ''
      this.searchTerm = ''
    }
  },

  _searchTerm: '',
  get searchTerm() { return this._searchTerm },
  set searchTerm(value) {
    this._searchTerm = value
    const linkItemElements = Array.from($id('page-content').getElementsByClassName('link-item'))

    if (value) {
      const linkItemElementsData = linkItemElements.map(element => ({
        element,
        label: element.getElementsByClassName('link-item__label')[0].textContent
      }))

      fuzzy.goAsync(value, linkItemElementsData, { key: 'label', allowTypo: false, limit: 6 })
        .then(results => {
          if (results.length) {
            const html = results.map(result => result.obj.element.outerHTML).join('')
            $id('page-search-results').innerHTML = html
          } else {
            $id('page-search-results').innerHTML = '<div class="page-search__results-hint">No sites could be found for your search term :(</div>'
          }
          this.searchResultSelectedIndex = 0
        })
    } else {
      $id('page-search-results').innerHTML = '<div class="page-search__results-hint">Type ahead to filter sites...</div>'
      this.searchResultSelectedIndex = 0
    }
  },

  _searchResultSelectedIndex: 0,
  get searchResultSelectedIndex() { return this._searchResultSelectedIndex },
  set searchResultSelectedIndex(value) {
    this._searchResultSelectedIndex = value
    const resultElements = Array.from($id('page-search-results').getElementsByClassName('link-item'))
    if (!resultElements.length) return
    resultElements.forEach(element => element.classList.remove('link-item--has-focus'))
    resultElements[value].classList.add('link-item--has-focus')
  }
}

state.searchActive = false
state.searchTerm = ''
state.searchResultSelectedIndex = 0

$id('page-search-action').addEventListener('click', () => { state.searchActive = !state.searchActive })
$id('page-search-input').addEventListener('input', event => state.searchTerm = event.target.value)
$id('page-search-input').addEventListener('keydown', onPageSearchInputKeydown)
window.addEventListener('keypress', onWindowKeypress)
window.addEventListener('keydown', onWindowKeydown)

/** @param { KeyboardEvent } event */
function onWindowKeypress(event) {
  if (!state.searchActive) {
    if (event.key === '/') {
      event.preventDefault()
    }

    state.searchActive = true
  }
}

/** @param { KeyboardEvent } event */
function onWindowKeydown(event) {
  if (event.key === 'Escape') {
    if (state.searchActive) {
      state.searchActive = false
    }
  }
}

function onPageSearchInputKeydown(event) {
  if (event.key === 'ArrowUp') {
    event.preventDefault()
    if (state.searchResultSelectedIndex <= 0) {
      state.searchResultSelectedIndex = 0
    } else {
      state.searchResultSelectedIndex -= 1
    }
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    const highestIndex = getSearchResultsCount() - 1
    if (state.searchResultSelectedIndex >= highestIndex) {
      state.searchResultSelectedIndex = highestIndex
    } else {
      state.searchResultSelectedIndex += 1
    }
  }

  if (event.key === 'Enter') {
    const link = $$class('link-item--has-focus')[0].getAttribute('href')
    if (event.ctrlKey) {
      window.open(link)
    } else {
      window.location.href = link
    }
  }

  if (event.key === 'Backspace') {
    if ($id('page-search-input').value === '') {
      if (event.ctrlKey) { event.preventDefault() }
      state.searchActive = false
    }
  }
}

function getSearchResultsCount() {
  return $id('page-search-results').getElementsByClassName('link-item').length
}