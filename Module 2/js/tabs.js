document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {

      document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('tab-active');
      });
  
 
      document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
      });
  

      this.classList.add('tab-active');

      if (this.classList.contains('tab-content1')) {
        document.querySelector('.content1').classList.add('active');
      } else if (this.classList.contains('tab-content2')) {
        document.querySelector('.content2').classList.add('active');
      } else if (this.classList.contains('tab-content3')) {
        document.querySelector('.content3').classList.add('active');
      }
    });
  });
  