/** Storage functions */
class storage {
  /**
   * Retrieve item from storage
   * @param {string} item - Item to be retrieved
   * @return {Object} retrieved object
   */
  static get(item) {
    return JSON.parse(sessionStorage.getItem(item));
  }

  /**
   * Set an item to storage
   * @param {object} item - Item to be set to storage
   * @param {key} key - Key to be set to.
   */
  static set(key, item) {
    sessionStorage.setItem(key, JSON.stringify(item));
  }

  /**
   * Delete an Item
   * @param {object} item - item to be deleted
   */
  static delete(item) {
    sessionStorage.removeItem(item);
  }

  /**
   * Clear all items from storage
   */
  static clear() {
    sessionStorage.clear();
  }
}

export default storage;
