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
})