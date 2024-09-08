window.onload = function () {
  const links = document.querySelectorAll('.nav-link');
  const cons = document.querySelectorAll('.con');

  // 默认显示第一个.con元素  
  if (cons.length > 0) {
    cons[0].style.display = 'block'; // 显示第一个.con元素  
  }

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // 阻止链接的默认行为  
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById('con' + targetId);

      // 隐藏所有.con元素  
      cons.forEach(div => {
        div.style.display = 'none';
      });

      // 显示目标.con元素  
      if (targetElement) {
        targetElement.style.display = 'block';
      }
    });
  });

  const userName = new URLSearchParams(window.location.search).get('user_name') || localStorage.getItem('user_name') || 'Guest';  
  document.getElementById('userName').textContent = userName;  

  const theme = localStorage.getItem('theme') || 'light';  
  document.body.dataset.theme = theme;  

  if (theme === 'dark') {  
      document.body.classList.add('dark-theme'); // 假设你需要在body上添加一个类来触发CSS  
  }  
}
function submitUserName() {  
  const userName = document.getElementById('userInput').value;  
  document.getElementById('userName').textContent = userName;  
  localStorage.setItem('user_name', userName);  
}  

function toggleTheme() {  
  const currentTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';  
  document.body.dataset.theme = currentTheme;  
  localStorage.setItem('theme', currentTheme);  

  // 根据需要添加或移除类  
  if (currentTheme === 'dark') {  
      document.body.classList.add('dark-theme');  
  } else {  
      document.body.classList.remove('dark-theme');  
  }  
}
