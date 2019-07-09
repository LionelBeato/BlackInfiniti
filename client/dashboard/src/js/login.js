if (localStorage.getItem("myURL")) {
  localStorage.removeItem("myURL");
}

const loginValues = [{
  user: 'finance@bi.com',
  password: 'letmein',
  url: 'http://localhost:5500/client/dashboard/src/finance.html'
}, {
  user: 'lease@bi.com',
  password: 'letmein',
  url: 'http://localhost:5500/client/dashboard/src/lease.html'
}, {
  user: 'fullsale@bi.com',
  password: 'letmein',
  url: 'http://localhost:5500/client/dashboard/src/full-sale.html'
}];

const $user = $('#inputEmail');
const $password = $('#inputPassword');
$('#login').click(function (e) {
  e.preventDefault();

  let url = './index.html';
  $.each(loginValues, function (i, loginValue) {
    if ($user.val() === loginValue.user && $password.val() === loginValue.password) {
      url = loginValue.url;
      localStorage.setItem("myURL", loginValue.url);
      return false;
    }
  });

  $('#loginForm').prop('action', url).submit();
  if (url === './index.html') {
    alert("Please enter a valid username and password.");
  }
});