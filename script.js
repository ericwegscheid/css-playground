
const $parent = $('<div class="parent"></div>')
const $child = $([
  '<div class="child">',
  '<div class="img"></div>',
  '<div>',
  '<h3>test</h3>',
  '<p>this is a test</p>',
  '</div>',
  '</div>'
].join(''))

const genEx = (id) => {
  $(document.body).append(
    $parent
    .prop('id', id)
    .clone()
    .append(
      $child.clone().append('<p>yup</p><p>yup</p><p>yup</p><p>yup</p><p>yup</p><p>yup</p>'),
      $child.clone(),
      $child.clone(),
      $child.clone(),
      $child.clone(),
      $child.clone(),
      $child.clone(),
      $child.clone(),
    ),
    '<hr>'
  )
}

genEx('example-1')
genEx('example-2')
