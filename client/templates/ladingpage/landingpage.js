Template.landingpage.helpers({
    currentDay: function () {
        var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
            'aug', 'sep', 'oct', 'nov', 'dec'];
        var today = new Date();

        today.setTime(today.getTime());

        return today.getDate();
    },

    currentMonth: function () {
        var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul',
            'aug', 'sep', 'oct', 'nov', 'dec'];
        var today = new Date();

        today.setTime(today.getTime());

        return months[today.getMonth()];
    }
});


Template.ionSlideBox.rendered = function () {
  this.$('.ion-slide-box').slick({
    infinite: this.doesContinue,
    autoplay: true,
    autoplaySpeed: this.slideInterval,
    arrows: false,
    dots: true,
    dotsClass: 'slider-pager',
    initialSlide: this.initialSlide,
    customPaging: function(slider, i) {
      return '<span class="slider-pager-page icon ion-record"></span>';
    }
  });
  this.$('.ion-slide-box').on('afterChange', function (event, slick, currentSlide) {
    $(this).trigger({type: 'onSlideChanged', index: currentSlide});
  });
};