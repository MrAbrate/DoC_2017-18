const URL_BASE = 'https://scratch.mit.edu/site-api/projects/in/4387897/'; // /pageno
const pageNum = 1;
const studioEmpty = false;

get(URL_BASE + pageNum)
.then((response) => {
  console.log(response);
});

// function lazyImages() {
//     $gallery.find('.scratch-project').each(function () {
//         var $this = $(this);
//         var val = "url('" + $this.attr('img-data') + "')";
//         $this.css('background-image', val);
//     });
// }
//
// function shutItDown() {
//     studioEmpty = true;
// }
//
// function addShowMoreButton() {
//     $btn = $('<div class="text-center" id="show-more"><button class="btn">Show more</button></div>')
//     $gallery.after($btn);
//     $btn.on('click', function () {
//         var $this = $(this);
//         loadPage(pageNum);
//         $this.off('click');
//         $this.remove();
//
//     });
//
// }
//
// function loadPage(n) {
//     $.get(URL_BASE + studios[0] + '/' + n + '/', function (data) {
//
//         $('.load-msg').remove();
//
//         $(data).each(function () {
//             var $this = $(this);
//             if (!$this.hasClass('project')) return;
//
//             var $this = $(this);
//             var id = $this.attr('data-id')
//             var src = $this.find('.image').attr('data-original');
//             var title = $this.find('.title a').text();
//             var owner = $this.find('.owner a').text();
//
//             var $project = $('<a href="https://scratch.mit.edu/projects/' + id + '/" target="_blank" class="scratch-project gallery-item" img-data="' + src + '"></a>');
//
//             $project.append($('<h3 class="title">' + title + '</h3>'));
//             $project.append($('<span class="name">' + owner + '</span>'));
//             $gallery.append($project);
//         });
//         pageNum += 1;
//         lazyImages();
//         addShowMoreButton();
//     }).fail(shutItDown);
// }
//
// loadPage(pageNum);
//
