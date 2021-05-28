$(function() {
  document.querySelector('.container-body').classList.remove('animation', 'slideLeft', 'slideRightReturn');

    console.log('test');
    var options = {
        prefetch: true,
        cacheLength: 2,
        onStart: {
          duration: 400,
          render: function ($container) {
            // Add your CSS animation reversing class
            document.querySelector('.container-body').classList.remove('animation', 'slideRightReturn');
            document.querySelector('.container-body').classList.add('animation', 'slideLeft');
            window.scrollTo({top: 0, behavior: 'smooth'});
          }
        },
        onReady: {
          duration: 200,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            document.querySelector('.container-body').classList.remove('animation', 'slideLeft', 'slideRightReturn');

            // Inject the new content
            $container.html($newContent);
    
          }
        }
    }
    $('main').smoothState(options).data('smoothState');
  });

