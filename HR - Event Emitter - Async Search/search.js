const EventEmitter = require('events');
const API = require('./mock-api');
// To count the matches, call API.countMatches(term) where term is the search term


class Search extends EventEmitter {
  constructor() {
    super();
  }

  async searchCount(searchTerm) {
    if (searchTerm === undefined) {
      this.emit('SEARCH_ERROR', {"message": 'INVALID_TERM'})
      return;
    } else {
      this.emit('SEARCH_STARTED', searchTerm);
    }

    try {
      const count = await API.countMatches(searchTerm);
      this.emit('SEARCH_SUCCESS', {"count": count, "term": searchTerm})
    } catch (error) {
      this.emit('SEARCH_ERROR', {"message": error.message, "term": searchTerm})
    }
  }
}

module.exports = Search