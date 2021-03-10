const template = `
<button id="launchIconPicker" class="btn btn-outline-secondary" data-iconpicker-input="#iconPicker" data-iconpicker-preview="#icon-preview">
  <i id="icon-preview" :class="value"></i>
  &nbsp;Choose Icon</button>
<input type="hidden" id="iconPicker" class="form-control">
`

export default {
  template,

  props: ['value'],
  emits: ["input"],
  mounted() {
    var app = this;
    IconPicker.Init({
      // Required: You have to set the path of IconPicker JSON file to "jsonUrl" option. e.g. '/content/plugins/IconPicker/dist/iconpicker-1.5.0.json'
      jsonUrl: '/editor/js/iconpicker/iconpicker-1.5.0.json',
      // Optional: Change the buttons or search placeholder text according to the language.
      searchPlaceholder: 'Search Icon',
      showAllButton: 'Show All',
      cancelButton: 'Cancel',
      noResultsFound: 'No results found.', // v1.5.0 and the next versions
      borderRadius: '20px', // v1.5.0 and the next versions
    });
    IconPicker.Run('#launchIconPicker', function() {
      //app.value = document.querySelector('#iconPicker').value;
      app.$emit("input", document.querySelector('#iconPicker').value);
    });
  }
};