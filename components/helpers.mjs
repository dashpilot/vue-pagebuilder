export default {
  def: function(key, val) {
    return val;
  },
  youtube_parser: function(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    var match = url.match(regExp)
    return match && match[7].length == 11 ? match[7] : false
  }
}