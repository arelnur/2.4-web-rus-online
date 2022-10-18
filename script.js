var fullName = 'Elnur Arabov'
var getInitials = function (fullName) {
  var parts = fullName.split(' ')
  var initials = ''
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 && parts[i] !== '') {
      initials += parts[i][0]
    }
  }
  return initials
}

console.log(getInitials(fullName))