// A $( document ).ready() block.
$( document ).ready(function() {




//var eryc_weekday_arr  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//var eryc_month_arr    = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function er_datepicker_init() {

  $('.er-datepicker:not(.hasDatepicker)').each(function(i, o){

    var format    = jQuery(this).attr('data-date-format') == undefined ? 'D, d M yy' : jQuery(this).attr('data-date-format');
    var min_date  = jQuery(this).attr('data-date-min') == undefined ? null : jQuery(this).attr('data-date-min');
    var max_date  = jQuery(this).attr('data-date-max') == undefined ? null : jQuery(this).attr('data-date-max');
    var set_date  = min_date != null ? min_date : 'today';

    var $this     = jQuery(this);

    jQuery(this).datepicker({
      dateFormat: format,
      minDate: min_date,
      maxDate: max_date,
      onSelect: function(date, obj){
        $this.attr('data-value', er_datepicker_get_date_value(jQuery(this)));
        $this.trigger('eryc-datepicker-select');
      }
    }).datepicker('setDate', set_date).attr('data-value', er_datepicker_get_date_value(jQuery(this)));

  })

}

function er_datepicker_get_date_value(el) {
  var getdate   = el.datepicker('getDate');
  var date_y    = getdate.getFullYear();
  var date_m    = ("0" + (getdate.getMonth() + 1)).slice(-2);
  var date_d    = ('0' + getdate.getDate()).slice(-2);
  var date_ymd  = [date_y, date_m, date_d].join('-');
  var date      = date_ymd;

  return date;
}

//er_datepicker_init();

// Search Options
function erDirectoryCards_Tmpl_leisure_search_options(search_config, el, id){
  
  console.log("load info");

  var html = [];

  jQuery.each(search_config, function(i, o){

    var label         = o.label;
    var type          = o.type;
    var keyname       = o.keyname;
    var options       = o.options;
    var placeholder   = o.placeholder;
    var col_idx       = o.col;
    var icon          = o.icon;
    var querystring   = o.querystring;
    var alltext       = o.alltext.length > 0 ? o.alltext : 'Any';
    var excludeall    = o.excludeall;
    var hiddeninit    = o.hiddeninit;
    var invisible     = o.invisible;
    var showonsearch  = o.showwhensearch;
    var defaultval    = o.defaultval;
    var excludeopts   = o.excludeoptions;
    var excludevals   = [];

    if (excludeopts != undefined && excludeopts.length > 0) {
      jQuery.each(excludeopts, function(idx, obj) {
        excludevals.push(obj['value']);
      })
    }

    var icon_html     = icon.length > 0 ? '<i class="' + icon + '" aria-hidden="true"></i>' : '';
    var before_class  = icon.length > 0 ? 'before' : '';

    var search_html   = '';

    var selected_init = '';
    var selected      = '';

    // Dropdowns
    if (type == 'dropdown') {

      var option_all   = excludeall == '1' ? '' : '<option value="all" data-id="all">' + alltext + '</option>';
      var option_placeholder = placeholder.length == 0 ? '' : '<option disabled selected>' + placeholder + '</option>';

      var options_html  = [option_placeholder, option_all];

      jQuery.each(options, function(idx, obj){
        var option_id = obj.toLowerCase().replace(/[\W_]+/g, "_");

        if (querystring != undefined  && getUrlParameter(querystring) == option_id || defaultval != undefined && defaultval == obj) {
          selected = 'selected';
        }
        else {
          selected = '';
        }

        if (excludevals.length > 0 && excludevals.indexOf(obj) < 0 || excludevals.length == 0) {
          options_html.push('<option value="' + obj +'" data-id="' + option_id + '" ' + selected +'>' + obj + '</option>');
        }

      })

    }
    
    // Checkbox
    /*if (type == 'checkbox') {

      var option_all   = excludeall == '1' ? '' : '<option value="all" data-id="all">' + alltext + '</option>';
      var option_placeholder = placeholder.length == 0 ? '' : '<option disabled selected>' + placeholder + '</option>';

      var options_html  = [option_placeholder, option_all];

      jQuery.each(options, function(idx, obj){
        var option_id = obj.toLowerCase().replace(/[\W_]+/g, "_");

        if (querystring != undefined  && getUrlParameter(querystring) == option_id || defaultval != undefined && defaultval == obj) {
          selected = 'selected';
        }
        else {
          selected = '';
        }

        if (excludevals.length > 0 && excludevals.indexOf(obj) < 0 || excludevals.length == 0) {
          options_html.push('<option value="' + obj +'" data-id="' + option_id + '" ' + selected +'>' + obj + '</option>');
        }

      })
      
    }
    
    
    // Checkbox
    /*if (type == 'checkbox') {

      var option_all   = excludeall == '1' ? '' : '';
      var option_placeholder = placeholder.length == 0 ? '' : '';

      var options_html  = [option_placeholder, option_all];

      jQuery.each(options, function(idx, obj){
        var option_id = obj.toLowerCase().replace(/[\W_]+/g, "_");
        console.log("option id" + option_id);
        console.log("obj" + obj);
        if (querystring != undefined  && getUrlParameter(querystring) == option_id || defaultval != undefined && defaultval == obj) {
          selected = 'selected';
        }
        else {
          selected = '';
        }
        if (option_id == "false") {
            if (excludevals.length > 0 && excludevals.indexOf(obj) < 0 || excludevals.length == 0) {
              options_html.push('<input type="checkbox" value="' + obj +'" data-id="' + option_id + '" ' + selected +'>');
            }
        }

      })

    }*/

    /*if (type == 'dropdownminmaxtime') {

      var options_html  = [];

      var options_data =  [
                            {
                              id:   'all',
                              min:  '0000',
                              max:  '2359',
                              txt:  'Any time',
                            },
                            {
                              id:   'morning',
                              min:  '0000',
                              max:  '1259',
                              txt:  'Morning: Open - 1pm'
                            },
                            {
                              id:   'afternoon',
                              min:  '1300',
                              max:  '1559',
                              txt:  'Afternoon: 1pm - 4pm'
                            },
                            {
                              id:   'evening',
                              min:  '1600',
                              max:  '2359',
                              txt:  'Evening: 4pm - Close'
                            }
                          ];

      jQuery.each(options_data, function(idx, obj){
        options_html.push('<option value="' + obj['id'] +'" data-min="' + obj['min'] + '" data-max="' + obj['max'] +'">' + obj['txt'] + '</option>');
      })

    }*/

    /*if (type == 'dropdowndate') {

      var options_html  = [];

      for (var i = 0; i < 21; i++) {
        var date = new Date();
        date.setDate(date.getDate() + i);
        var getdate   = ("0" + date.getDate()).slice(-2);
        var getmonth  = ("0" + (date.getMonth() + 1)).slice(-2);
        var getyear   = date.getFullYear();
        var getday    = date.getDay();
        var date_val  = [getyear, getmonth, getdate].join('-');
        var date_txt  = 'Today';

        if (i == 1) {
          date_txt    = 'Tomorrow';
        }

        else if (i > 1) {
          date_txt     = eryc_weekday_arr[getday] + ' - ' + getdate + ' ' + eryc_month_arr[getmonth - 1];
        }

        options_html[i] = '<option value="' + date_val +'">' + date_txt + '</option>';
      }
    }*/

    if (type == 'dropdown' || type == 'dropdownminmaxtime' || type =='dropdowndate') {

      var datepicker_html = '';

      if (type == 'dropdowndate') {
        datepicker_html = '';
      }

      var hidden_class  = hiddeninit == '1' ? 'hidden' : '';
      hidden_class      = invisible == '1' ? hidden_class + ' dir-search-hidden-and-active' : hidden_class;
      var showwhensearch_data = showonsearch.length > 0 ? 'data-key-show="' + showonsearch + '"' : '';

      search_html = '<div class="search ' + hidden_class + '" data-type="' + type + '" data-key="' + keyname + '" ' + showwhensearch_data +'>' +
                      '<label>' + label + '</label>' +
                      '<div class="er-select-wrapper">' +
                        icon_html + 
                        '<select class="wrapped after ' + before_class + ' trigger-search" data-col-idx="' + col_idx + '" name="' + id + '-search-' + i + '" id="' + id + '-search-' + i + '">' +
                          options_html.join('') +
                        '</select>' +
                        '<i class="far fa-chevron-down" aria-hidden="true"></i>' +
                      '</div>' +
                      datepicker_html +
                    '</div>';
      }
    
      /*if (type == 'checkbox') {

      var datepicker_html = '';

      if (type == 'dropdowndate') {
        datepicker_html = '';
      }

      var hidden_class  = hiddeninit == '1' ? 'hidden' : '';
      hidden_class      = invisible == '1' ? hidden_class + ' dir-search-hidden-and-active' : hidden_class;
      var showwhensearch_data = showonsearch.length > 0 ? 'data-key-show="' + showonsearch + '"' : '';

      search_html = '<div class="search ' + hidden_class + '" data-type="' + type + '" data-key="' + keyname + '" ' + showwhensearch_data +'>' +
                      '<label>' + label + '</label>' +
                      '<div class="er-select-wrapper">' +
                        icon_html + 
                        '<select class="wrapped after ' + before_class + ' trigger-search" data-col-idx="' + col_idx + '" name="' + id + '-search-' + i + '" id="' + id + '-search-' + i + '">' +
                          options_html.join('') +
                        '</select>' +
                        '<i class="far fa-chevron-down" aria-hidden="true"></i>' +
                      '</div>' +
                      datepicker_html +
                    '</div>';
      

        
      }*/
    
      /*if (type == 'checkbox') {

          var datepicker_html = '';

          if (type == 'dropdowndate') {
            datepicker_html = '';
          }

          var hidden_class  = hiddeninit == '1' ? 'hidden' : '';
          hidden_class      = invisible == '1' ? hidden_class + ' dir-search-hidden-and-active' : hidden_class;
          var showwhensearch_data = showonsearch.length > 0 ? 'data-key-show="' + showonsearch + '"' : '';

          search_html = '<input type="checkbox" class="" value="' + keyname + '" data-type="' + type + '" data-key="' + keyname + '" ' + showwhensearch_data +'>' +
                            //'<select class="wrapped after ' + before_class + ' trigger-search" data-col-idx="' + col_idx + '" name="' + id + '-search-' + i + '" id="' + id + '-search-' + i + '">' +
                              options_html.join('');
                             // <input type="checkbox" value="' + obj +'" data-id="' + option_id + '" ' + selected +'>
                            //'</select>' +
                          //'<div class="search check-box">' + datepicker_html + '</div>' +
                        //'</div>';
    }*/

    // Keyword

    /*if (type == 'keyword') {
      var keyword_value = '';
      if (querystring != undefined  && getUrlParameter(querystring).length > 0) {
        keyword_value = getUrlParameter(querystring);
      }
      search_html = '<div class="search" data-type="' + type + '">' +
                      '<label>' + label + '</label>' +
                      '<div class="er-input-wrapper">' +
                        icon_html + 
                        '<input class="wrapped ' + before_class + ' trigger-search" data-col-idx="' + col_idx + '" id="' + id + '-search-' + i + '" value="' + keyword_value + '" placeholder="' + placeholder +'"/>' +
                      '</div>' +
                    '</div>';
    }*/

    html.push(search_html);


  })

  el.append(html.join(''));
  $('#directoryjs-9514-search-Centre').val('Pico').trigger('change');
  jQuery(document).trigger('eryc_searches_built');
  er_datepicker_init();

}

// Search results
function erDirectoryCards_Tmpl_leisureswim_search_results(config, headers, rows, triggerIdx) {

  config.els.results.empty();

  var tr_morning    = [];
  var tr_action    = [];

  $.each(rows, function(i, o){

      var cols = o;

      var dir_title     = cols[headers.indexOf('Games')];
      var dir_date      = cols[headers.indexOf('Date')];
      var dir_start     = cols[headers.indexOf('Start Time')];
      var dir_end       = cols[headers.indexOf('End Time')];
      var dir_location  = cols[headers.indexOf('Centre')];
 
      /*var dtime_start   = new Date('1970-01-01 ' + dir_start);
      var dtime_end     = new Date('1970-01-01 ' + dir_end);
      var hours_start   = Math.floor(dtime_start/1000/60/60) + 1;
      var hours_end     = Math.floor(dtime_end/1000/60/60) + 1;
      var seconds       = (dtime_end - dtime_start)/1000;
      var minutes       = Math.floor(seconds/60);
      var hours         = Math.floor(minutes/60);
      minutes           = minutes % 60;
      var hours_sfx     = hours == 1 ? 'hour' : 'hours';
      var hours_sfx_mb  = hours_sfx.replace('ou', '');
      var hours_text    = hours > 0 ? hours + ' ' + hours_sfx : '';
      var hours_text_mb = hours > 0 ? hours + ' ' + hours_sfx_mb : '';
      var mins_sfx      = 'minutes';
      var mins_sfx_mb   = 'mins';
      var mins_text     = minutes > 0 ? minutes + ' ' + mins_sfx : '';
      var mins_text_mb  = minutes > 0 ? minutes + ' ' + mins_sfx_mb : '';

      var duration      = [hours_text, mins_text].join(' ');
      var duration_mb   = [hours_text_mb, mins_text_mb].join(' ');
      var duration_html = '<span class="visible-phone">' + duration_mb + '</span><span class="hidden-phone">' + duration + '</span>';

      var time          = dir_start + ' - ' + dir_end;
      //var data_time     = dir_start.indexOf(':') > -1 ? dir_start.replace(':', '') : '0000';
      */
      var session_id    = '';
      var desc          = '';
      var title         = dir_title;
      if (desc.length > 0) {
        title           = '<a href="#" class="styled lclasses-desc-info" title="View description for class">' + 
                            '<span>' + dir_title + '</span>' +
                            '<i class="name-icon er-accent-site far fa-info-circle" aria-hidden="true"></i>' +
                          '</a>'
                          '<div class="sub" data-id="desc">' + desc + '</div>';
      }
    
      var lower = title.toLowerCase();
    
      var lowert = lower.replace(/ /g,"_");
     
    
      var tr_html         = '<div class="row" data-session-id="' + session_id + '">' +
                              '<div class="row-col" data-id="name">' +
                                  //'<div class="image-icon" style="background-image: url(/images/' + lowert +'.jpg), url(/images/placeholder-images-image_large.png)"></div>' +
                                  '<div class="col" data-id="name">' + title +'</div>' +
                                  '<div class="col" data-id="time"><span>' +    
                                    '</div>' +
                                '</div>' +
                            '</div>';

        tr_morning.push(tr_html);

  })

  var thead_html        = '<div class="thead">' + 
                            '<div class="row">' + 
                              '<div class="col" data-id="name">Games</div>' + 
                               '<div class="col" data-id="time">Type</div>' +  
                            '</div>' + 
                          '</div>';

  var morning_html      = '';
  if (tr_morning.length > 0) {
    morning_html        = '<div class="table result" data-id="morning">' + 
                              thead_html +
                              '<div class="tbody">' + 
                                tr_morning.join('') +
                              '</div>' +
                            '</div>';
  }



  var tables_html     = [morning_html].join('');

  config.els.results.append('<div class="er-timetable">' + tables_html + '</div>');

  if (triggerIdx == 0) {
    jQuery(document).trigger('eryc_leisure_swim_results');
  }

}

// Get query string parameter as string
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Get URL parameters as array
function getUrlParameters() {
  var query   = window.location.search.slice(1);
  var querys  = query.split('&');
  var array   = {};

  if (query.length > 0) {
    for (var i = 0; i < querys.length; i++) {
      var split = querys[i].split('=');
      array[split[0]] = decodeURIComponent(split[1].replace(/\+/g, ''));
    }
  }

  return array;
};

var vars     =  {
  els: {
    el: $('#directoryjs-9514'),
    results: $('#directoryjs-9514 > .eryc-results'),
    nav: $('#directoryjs-9514 > .eryc-navigation'),
    search: $('#directoryjs-9514 > .eryc-searches'),
  },
  cssid: '',
  mode: 'search',
  file_location: 'https://link.andymorphs.com/assets/tsv/pico.tsv',
  file_location_entry: '',
  image_location: '',
  entry_location: '/',
  search_location: '/',
  max_results: -1,
  enable_search: 1,
  pagination: 0,
  pagination_limit: 0,
  pagination_total: 0,
  back_text: 'Back to search',
  limits: {
    desktop: 24,
    mobile: 1,
  },
  search_keyword_min: 3,
  firstsearch: 1,
}

        var file = vars.file_location;



  var window_width = window.innerWidth;

  var limits_default = window_width < 768 ? vars.limits.mobile : vars.limits.desktop;

  var particle_search = [{"label":"Device","type":"dropdown","keyname":"Centre","placeholder":"Choose a device","alltext":"All Devices","icon":"fas fa-map-marker-alt","querystring":"location","excludeall":"1","showwhensearch":"","hiddeninit":"0","name":"Location"},
                         {"label":"Title","type":"keyword","keyname":"Title","placeholder":"","alltext":"Any Title","icon":"fas fa-swimming-pool","querystring":"","excludeall":"0","showwhensearch":"Centre","hiddeninit":"1","name":"Title"}];

var search_params = {};
  var search_type_to_extract = ['dropdown', 'dropdowndate', 'dropdownminmaxtime', 'checkbox'];

  $.each(particle_search, function(i, o){
    search_params[o.keyname]            = o;
    search_params[o.keyname]['options'] = [];
    search_params[o.keyname]['col']     = 0;
  })


var data_ajax_content = [];
var data_ajax_headers = [];
var data_ajax_array   = [];
var data_filitered    = [];
var data_ranked       = [];

$.ajax({
  type: "GET",
  url: file,
  dataType: "text",
  success: function(data) {

    var rows          = data.split('\r\n');

    data_ajax_headers = rows[0].split('\t');

    
      data_ajax_header_idx = [];

      $.each(data_ajax_headers, function(i, o){
        if (search_params[o] != undefined && search_type_to_extract.indexOf(search_params[o].type) > -1) {
          data_ajax_header_idx.push(i);
          search_params[o]['col'] = i;
        }
      })

    
    var noheaders     = rows.slice(1);

    var html          = [];

    data_ajax_content = noheaders;

    var entry_qs      = getUrlParameter('entry');

    $.each(data_ajax_content, function(i, o){

      var cols = o.split('\t');

      
        $.each(data_ajax_header_idx, function(idx, obj){

          var col_idx = data_ajax_headers[obj];
          var content = cols[obj];

          var split   = content.split('/');

          cols[obj]   = split;

          for (var i = 0; i < split.length; i++) {
            if (search_params[col_idx]['options'].indexOf(split[i]) < 0 && split[i].length > 0) {
              search_params[col_idx]['options'].push(split[i]);
            }
          }

        })

      
      if (vars.mode == 'entry' && entry_qs == cols[0] || vars.mode != 'entry') {
        data_ajax_array.push(cols);
      }


    })

    data_filitered = data_ajax_array;

    
      $.each(search_params, function(i, o){
        var sorted = o['options'].sort();
      })

      var init_limit =  limits_default;
     if (vars.pagination == '0') {
        init_limit = parseInt(vars.max_results) > 0 ? parseInt(vars.max_results) : data_ajax_content.length;
        limits_default = init_limit;
      }


      if (vars.pagination == '1') {
        ErycPaginationScripts(vars.els.nav, 'directoryjs-9514', limits_default, data_ajax_content.length, 'no labels', vars.pagination_limit, vars.pagination_total);
      }


      if (vars.enable_search == '1') {
        erDirectoryCards_Tmpl_leisure_search_options(search_params, vars.els.search, 'directoryjs-9514');
      }


      if (vars.firstsearch == '0') {
        erDirectoryCards_Tmpl_leisureswim_search_results(vars, data_ajax_headers, data_filitered.slice(0, init_limit), 0);
      }

    
    
  }

});


  $(document).on('eryc_pagination_click', '#directoryjs-9514', function(){

    var el_pagination = $(this).find('.eryc-pagination');
    var current_page  = parseInt(el_pagination.find('ul .selected').attr('data-index'));
    var limit         = parseInt(el_pagination.attr('data-limit'));
    var start         = limit * (current_page - 1);
    var end           = limit * current_page;
    var max           = parseInt(el_pagination.attr('data-max'));
    if (end > max) {
      end = max;
    }

    el_pagination.attr('data-start', start + 1).attr('data-end', end);

    ErycPaginationCreateTotal(null, 'directoryjs-9514', limit, max);

    erDirectoryCards_Tmpl_leisureswim_search_results(vars, data_ajax_headers, data_filitered.slice(start, end), 1);
  })

  $(document).on('keyup', '#directoryjs-9514 .eryc-searches input.trigger-search', function(e){
    setTimeout(function() {
      $('#directoryjs-9514 .eryc-searches').trigger('eryc_search_trigger');
    }, 1500);
  });

  $(document).on('change', '#directoryjs-9514 .eryc-searches select.trigger-search', function(e){

    if ($(this).parents('.search').attr('data-type') == "dropdowndate") {
      if ($(this).val() == 'datepicker') {
        $(this).parents('.search').find('.er-input-wrapper').removeClass('hidden');
      }
      else {
        $(this).parents('.search').find('.er-input-wrapper').addClass('hidden');
      }
    }

   

    on_eryc_search_trigger_searches();

  });

  function on_eryc_search_trigger_searches() {
    
    vars.els.results.find('.error').remove();

    var search_array  = [];
    data_filitered    = [];
    data_ranked       = [];

    $('#directoryjs-9514 .eryc-searches .search .trigger-search').each(function(i, o){

      var data_key_show = $(this).parents('.search').attr('data-key-show');

      var $this   = $(this).parents('.search').find('.trigger-search:visible:last');

      var value   = $this.attr('data-value') != undefined && $this.attr('data-value').length > 0 ? $this.attr('data-value') : $this.val();
      var col_idx = $this.attr('data-col-idx');
      var type    = $this.parents('.search').attr('data-type');
      var min     = parseInt($this.find(':selected').attr('data-min'));
      var max     = parseInt($this.find(':selected').attr('data-max'));
      var arr     = {'col_idx': col_idx, 'value': value, 'type': type, 'min': min, 'max': max};

      var to_push = true;

      if (value == null || value == 'all' || value.length == 0) {
        to_push = false;
      }

      if (type == 'keyword' && value.length < parseInt(vars.search_keyword_min)) {
        to_push = false;
      }

      if ($(this).parents('.search').find('.trigger-search').length > 1 && i > 1 && search_array[i - 1]['col_idx'] == col_idx) {
        to_push = false;

      }

      if (to_push) {
        search_array.push(arr);
      }

    })

    var search_array_len = search_array.length;

    if (search_array_len > 0) {

      $.each(data_ajax_array, function(i, o){

        var add_row = 0;
        var keyword_row = 0;

        $.each(search_array, function(idx, obj){

          if (obj.type == 'keyword') {

            var keyword = obj.value.toLowerCase();

            var split   = keyword.trim().split(' ');

            $.each(split, function(k, v){
              if (o.filter(str => str.toString().toLowerCase().includes(v)).length > 0) {
                keyword_row++;
              }
            })

            if (keyword_row > 0) {
              add_row++;
            }

          }

          else if (obj.type == 'dropdown' || obj.type == 'dropdowndate' || obj.type == 'checkbox') {

            var col_content = o[obj.col_idx];

            if (col_content.indexOf(obj.value) > -1) {
              add_row++;
            }

          }

          else if (obj.type == 'dropdownminmaxtime') {

            var col_content = o[obj.col_idx][0].indexOf(':') > -1 ? parseInt(o[obj.col_idx][0].replace(':', '')) : 0;
            var min_value   = obj.min;
            var max_value   = obj.max;                  

            if (col_content >= min_value && col_content < max_value) {
              add_row++;
            }

          }

        })

        if (add_row == search_array_len) {
          if (keyword_row < 2) {
            data_filitered.push(o);
          }
          else {
            data_filitered.unshift(o);
          }

          if (data_ranked[keyword_row] == undefined) {
            data_ranked[keyword_row] = [];
          }

          data_ranked[keyword_row].push(o);

        }

      })

      var data_ranked_merged = [];

      for (var i = data_ranked.length ; i >= 0; i--) {

        if (data_ranked[i] != undefined) {
          $.merge(data_ranked_merged, data_ranked[i]);
        }
      }

      data_filitered = data_ranked_merged;

    }

    else {
      data_filitered = data_ajax_array;
    }

    var data_filitered_len = data_filitered.length;
    
    $(".games-total").append("Total Games & Apps: " + data_filitered_len);

    $('#directoryjs-9514 .eryc-searches').attr('data-max', data_filitered_len);

    if (vars.pagination == '1') {
      ErycPaginationScripts(vars.els.nav, 'directoryjs-9514', limits_default, data_filitered_len, 'no labels', vars.pagination_limit, vars.pagination_total);
    }

    if (data_filitered_len > 0) {

      erDirectoryCards_Tmpl_leisureswim_search_results(vars, data_ajax_headers, data_filitered.slice(0, limits_default), 2);

    }

    else {
      vars.els.results.empty().append('<div class="alert-icon alert-danger error">No results found');
    }

  }


});