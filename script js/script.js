const acordions = document.querySelectorAll('.acordion');

acordions.forEach(item => {
    const acordionQues = item.querySelector('.acordion-question');
    const acordionAnswer = item.querySelector('.acordion-answer');

    const icon = item.querySelector('.acordion-question i')


    acordionQues.addEventListener('click', function() {

        acordionAnswer.classList.toggle('active');
        icon.classList.toggle('fa-angle-up');

        if(acordionAnswer.classList.contains('active')) {
            acordionAnswer.style.display = 'block';
            icon.classList.add('fa-angle-up');
        }else {
            acordionAnswer.style.display = 'none';
            icon.classList.remove('fa-angle-up');
        }
    });
});