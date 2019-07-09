
const loginValues = [{
  user: 'finance@bi.com',
  password: 'letmein',
  url: './finance.html'
}, {
  user: 'lease@bi.com',
  password: 'letmein',
  url: './lease.html'
}, {
  user: 'fullsale@bi.com',
  password: 'letmein',
  url: './full-sale.html'
}];

const $user = $('#inputEmail');
const $password = $('#inputPassword');
$('#login').click(function(e) {
  e.preventDefault();

  let url = './index.html';
  $.each(loginValues, function(i, loginValue) {
    if ($user.val() === loginValue.user && $password.val() === loginValue.password) {
      url = loginValue.url;
      return false;
    }
  });

  $('#loginForm').prop('action', url).submit();
  if (url === './index.html') {
    alert("Please enter a valid username and password.");
  }
});