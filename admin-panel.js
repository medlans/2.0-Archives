var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function( $ ){
  var AdminPanel = function( el, options ) {
    this.options  = options;
    this.$element = $(el).on('click.admin-panel.dismiss', '[data-control="dismiss"]', $.proxy(this.hide, this))
        .on('click.admin-panel.expand', '[data-control="expand"]', $.proxy(this.expand, this))
  } 
    
  AdminPanel.prototype = {
    
    constructor: AdminPanel 
    
    , hide: function(e) {
      // hide the admin panel
      $('body').addClass('closed');
      $('#admin-panel').animate({width: [10, 'swing']});
    }

    , expand: function(e) {
      $('body').removeClass('closed');
      $('#admin-panel').animate({width: [230, 'swing']});
    }
    
  }
  
  $.fn.adminPanel = function( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('adminPanel')
        , options = $.extend({}, $.fn.adminPanel.defaults, $this.data(), typeof option == 'object' && option)
      if(!data) $this.data('adminPanel', (data = new AdminPanel(this, options)));
    });
  }

  $.fn.adminPanel.defaults = {
    // add option defaults here
  }
  
  $.fn.adminPanel.Constructor = AdminPanel 

})( window.jQuery );


}
/*
     FILE ARCHIVED ON 20:35:19 May 18, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:39:38 Mar 21, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 144.861
  exclusion.robots: 0.209
  exclusion.robots.policy: 0.197
  cdx.remote: 0.067
  esindex: 0.012
  LoadShardBlock: 107.926 (3)
  PetaboxLoader3.datanode: 82.579 (4)
  load_resource: 211.133
  PetaboxLoader3.resolve: 169.883
*/
