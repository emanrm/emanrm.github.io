bplist00�XUTI-Data�_$com.apple.traditional-mac-plain-text_public.utf8-plain-text_public.utf16-plain-textO	�function topFunction() {    document.body.scrollTop = 0;    document.documentElement.scrollTop = 0;}// $(document).ready(function() {//     // $("#demo").html("Hello, World!");// });//// (function($) {//     $.fn.textWidth = function(){//          var calc = '<span style="display:block">' + $(this).text() + '</span>';//          $('body').append(calc);//          var width = $('body').find('span:last').width();//          $('body').find('span:last').remove();//         return width;//     };////     $.fn.marquee = function(args) {//         var that = $(this);//         var textWidth = that.textWidth(),//             offset = that.width(),//             width = offset,//             css = {//                 'text-indent' : that.css('text-indent'),//                 'overflow' : that.css('overflow'),//                 'white-space' : that.css('white-space')//                 // 'font-size' : that.css('font-size');//             },//             marqueeCss = {//                 'text-indent' : width,//                 'overflow' : 'hidden',//                 'white-space' : 'nowrap'//             },//             args = $.extend(true, { count: -1, speed: 1e1, leftToRight: false }, args),//             i = 0,//             stop = textWidth*-1,//             dfd = $.Deferred();////         function go() {//             if(!that.length) return dfd.reject();//             if(width == stop) {//                 i++;//                 if(i == args.count) {//                     that.css(css);//                     return dfd.resolve();//                 }//                 if(args.leftToRight) {//                     width = textWidth*-1;//                 } else {//                     width = offset;//                 }//             }//             that.css('text-indent', width + 'px');//             if(args.leftToRight) {//                 width++;//             } else {//                 width--;//             }//             setTimeout(go, args.speed);//         };//         if(args.leftToRight) {//             width = textWidth*-1;//             width++;//             stop = offset;//         } else {//             width--;//         }//         that.css(marqueeCss);//         go();//         return dfd.promise();//     };// })(jQuery);//// $('h6').marquee();// $("h6").css({"background-color": "white", "font-size": "18px", "margin": "0", "padding": "25px 46px"});_	�function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// $(document).ready(function() {
//     // $("#demo").html("Hello, World!");
// });
//
// (function($) {
//     $.fn.textWidth = function(){
//          var calc = '<span style="display:block">' + $(this).text() + '</span>';
//          $('body').append(calc);
//          var width = $('body').find('span:last').width();
//          $('body').find('span:last').remove();
//         return width;
//     };
//
//     $.fn.marquee = function(args) {
//         var that = $(this);
//         var textWidth = that.textWidth(),
//             offset = that.width(),
//             width = offset,
//             css = {
//                 'text-indent' : that.css('text-indent'),
//                 'overflow' : that.css('overflow'),
//                 'white-space' : that.css('white-space')
//                 // 'font-size' : that.css('font-size');
//             },
//             marqueeCss = {
//                 'text-indent' : width,
//                 'overflow' : 'hidden',
//                 'white-space' : 'nowrap'
//             },
//             args = $.extend(true, { count: -1, speed: 1e1, leftToRight: false }, args),
//             i = 0,
//             stop = textWidth*-1,
//             dfd = $.Deferred();
//
//         function go() {
//             if(!that.length) return dfd.reject();
//             if(width == stop) {
//                 i++;
//                 if(i == args.count) {
//                     that.css(css);
//                     return dfd.resolve();
//                 }
//                 if(args.leftToRight) {
//                     width = textWidth*-1;
//                 } else {
//                     width = offset;
//                 }
//             }
//             that.css('text-indent', width + 'px');
//             if(args.leftToRight) {
//                 width++;
//             } else {
//                 width--;
//             }
//             setTimeout(go, args.speed);
//         };
//         if(args.leftToRight) {
//             width = textWidth*-1;
//             width++;
//             stop = offset;
//         } else {
//             width--;
//         }
//         that.css(marqueeCss);
//         go();
//         return dfd.promise();
//     };
// })(jQuery);
//
// $('h6').marquee();
// $("h6").css({"background-color": "white", "font-size": "18px", "margin": "0", "padding": "25px 46px"});
O`f u n c t i o n   t o p F u n c t i o n ( )   {          d o c u m e n t . b o d y . s c r o l l T o p   =   0 ;          d o c u m e n t . d o c u m e n t E l e m e n t . s c r o l l T o p   =   0 ;  }   / /   $ ( d o c u m e n t ) . r e a d y ( f u n c t i o n ( )   {  / /           / /   $ ( " # d e m o " ) . h t m l ( " H e l l o ,   W o r l d ! " ) ;  / /   } ) ;  / /  / /   ( f u n c t i o n ( $ )   {  / /           $ . f n . t e x t W i d t h   =   f u n c t i o n ( ) {  / /                     v a r   c a l c   =   ' < s p a n   s t y l e = " d i s p l a y : b l o c k " > '   +   $ ( t h i s ) . t e x t ( )   +   ' < / s p a n > ' ;  / /                     $ ( ' b o d y ' ) . a p p e n d ( c a l c ) ;  / /                     v a r   w i d t h   =   $ ( ' b o d y ' ) . f i n d ( ' s p a n : l a s t ' ) . w i d t h ( ) ;  / /                     $ ( ' b o d y ' ) . f i n d ( ' s p a n : l a s t ' ) . r e m o v e ( ) ;  / /                   r e t u r n   w i d t h ;  / /           } ;  / /  / /           $ . f n . m a r q u e e   =   f u n c t i o n ( a r g s )   {  / /                   v a r   t h a t   =   $ ( t h i s ) ;  / /                   v a r   t e x t W i d t h   =   t h a t . t e x t W i d t h ( ) ,  / /                           o f f s e t   =   t h a t . w i d t h ( ) ,  / /                           w i d t h   =   o f f s e t ,  / /                           c s s   =   {  / /                                   ' t e x t - i n d e n t '   :   t h a t . c s s ( ' t e x t - i n d e n t ' ) ,  / /                                   ' o v e r f l o w '   :   t h a t . c s s ( ' o v e r f l o w ' ) ,  / /                                   ' w h i t e - s p a c e '   :   t h a t . c s s ( ' w h i t e - s p a c e ' )  / /                                   / /   ' f o n t - s i z e '   :   t h a t . c s s ( ' f o n t - s i z e ' ) ;  / /                           } ,  / /                           m a r q u e e C s s   =   {  / /                                   ' t e x t - i n d e n t '   :   w i d t h ,  / /                                   ' o v e r f l o w '   :   ' h i d d e n ' ,  / /                                   ' w h i t e - s p a c e '   :   ' n o w r a p '  / /                           } ,  / /                           a r g s   =   $ . e x t e n d ( t r u e ,   {   c o u n t :   - 1 ,   s p e e d :   1 e 1 ,   l e f t T o R i g h t :   f a l s e   } ,   a r g s ) ,  / /                           i   =   0 ,  / /                           s t o p   =   t e x t W i d t h * - 1 ,  / /                           d f d   =   $ . D e f e r r e d ( ) ;  / /  / /                   f u n c t i o n   g o ( )   {  / /                           i f ( ! t h a t . l e n g t h )   r e t u r n   d f d . r e j e c t ( ) ;  / /                           i f ( w i d t h   = =   s t o p )   {  / /                                   i + + ;  / /                                   i f ( i   = =   a r g s . c o u n t )   {  / /                                           t h a t . c s s ( c s s ) ;  / /                                           r e t u r n   d f d . r e s o l v e ( ) ;  / /                                   }  / /                                   i f ( a r g s . l e f t T o R i g h t )   {  / /                                           w i d t h   =   t e x t W i d t h * - 1 ;  / /                                   }   e l s e   {  / /                                           w i d t h   =   o f f s e t ;  / /                                   }  / /                           }  / /                           t h a t . c s s ( ' t e x t - i n d e n t ' ,   w i d t h   +   ' p x ' ) ;  / /                           i f ( a r g s . l e f t T o R i g h t )   {  / /                                   w i d t h + + ;  / /                           }   e l s e   {  / /                                   w i d t h - - ;  / /                           }  / /                           s e t T i m e o u t ( g o ,   a r g s . s p e e d ) ;  / /                   } ;  / /                   i f ( a r g s . l e f t T o R i g h t )   {  / /                           w i d t h   =   t e x t W i d t h * - 1 ;  / /                           w i d t h + + ;  / /                           s t o p   =   o f f s e t ;  / /                   }   e l s e   {  / /                           w i d t h - - ;  / /                   }  / /                   t h a t . c s s ( m a r q u e e C s s ) ;  / /                   g o ( ) ;  / /                   r e t u r n   d f d . p r o m i s e ( ) ;  / /           } ;  / /   } ) ( j Q u e r y ) ;  / /  / /   $ ( ' h 6 ' ) . m a r q u e e ( ) ;  / /   $ ( " h 6 " ) . c s s ( { " b a c k g r o u n d - c o l o r " :   " w h i t e " ,   " f o n t - s i z e " :   " 1 8 p x " ,   " m a r g i n " :   " 0 " ,   " p a d d i n g " :   " 2 5 p x   4 6 p x " } ) ;       B [ u
)�             	              'A