(function() {
    'use strict';

    /**
     * Utility for performing date calculations to facilitate operation of the calendar and
     * datepicker.
     */
    angular.module('angular-material-persian-datepicker').factory('$$mdDateUtil', function() {
        return {
            getFirstDateOfMonth: getFirstDateOfMonth,
            getNumberOfDaysInMonth: getNumberOfDaysInMonth,
            getDateInNextMonth: getDateInNextMonth,
            getDateInPreviousMonth: getDateInPreviousMonth,
            isInNextMonth: isInNextMonth,
            isInPreviousMonth: isInPreviousMonth,
            getDateMidpoint: getDateMidpoint,
            isSameMonthAndYear: isSameMonthAndYear,
            getWeekOfMonth: getWeekOfMonth,
            incrementDays: incrementDays,
            incrementMonths: incrementMonths,
            getLastDateOfMonth: getLastDateOfMonth,
            isSameDay: isSameDay,
            getMonthDistance: getMonthDistance,
            isValidDate: isValidDate,
            setDateTimeToMidnight: setDateTimeToMidnight,
            createDateAtMidnight: createDateAtMidnight,
            isDateWithinRange: isDateWithinRange,
            incrementYears: incrementYears,
            getYearDistance: getYearDistance,
            clampDate: clampDate,
            getTimestampFromNode: getTimestampFromNode,
            isMonthWithinRange: isMonthWithinRange
        };

        /**
         * Gets the first day of the month for the given date's month.
         * @param {Date} date
         * @returns {Date}
         */
        function getFirstDateOfMonth(date) {
            return moment(date).startOf('jMonth').toDate();
        }

        /**
         * Gets the number of days in the month for the given date's month.
         * @param date
         * @returns {number}
         */
        function getNumberOfDaysInMonth(date) {
            var pd = moment(date);
            return moment.jDaysInMonth(pd.jYear(), pd.jMonth());
        }

        /**
         * Get an arbitrary date in the month after the given date's month.
         * @param date
         * @returns {Date}
         */
        function getDateInNextMonth(date) {
            var pd = moment(date);
            return pd.add(1, 'jMonth').toDate();
        }

        /**
         * Get an arbitrary date in the month before the given date's month.
         * @param date
         * @returns {Date}
         */
        function getDateInPreviousMonth(date) {
            var pd = moment(date);
            return pd.add(-1, 'jMonth').toDate();
        }

        /**
         * Gets whether two dates have the same month and year.
         * @param {Date} d1
         * @param {Date} d2
         * @returns {boolean}
         */
        function isSameMonthAndYear(d1, d2) {
            var pd1 = moment(d1);
            var pd2 = moment(d2);
            return pd1.jYear() === pd2.jYear() && pd1.jMonth() === pd2.jMonth();
        }

        /**
         * Gets whether two dates are the same day (not not necesarily the same time).
         * @param {Date} d1
         * @param {Date} d2
         * @returns {boolean}
         */
        function isSameDay(d1, d2) {
            var pd1 = moment(d1);
            var pd2 = moment(d2);
            return pd1.jYear() === pd2.jYear() && pd1.jMonth() === pd2.jMonth() && pd1.jDate() == pd2.jDate();
        }

        /**
         * Gets whether a date is in the month immediately after some date.
         * @param {Date} startDate The date from which to compare.
         * @param {Date} endDate The date to check.
         * @returns {boolean}
         */
        function isInNextMonth(startDate, endDate) {
            var nextMonth = getDateInNextMonth(startDate);
            return isSameMonthAndYear(nextMonth, endDate);
        }

        /**
         * Gets whether a date is in the month immediately before some date.
         * @param {Date} startDate The date from which to compare.
         * @param {Date} endDate The date to check.
         * @returns {boolean}
         */
        function isInPreviousMonth(startDate, endDate) {
            var previousMonth = getDateInPreviousMonth(startDate);
            return isSameMonthAndYear(endDate, previousMonth);
        }

        /**
         * Gets the midpoint between two dates.
         * @param {Date} d1
         * @param {Date} d2
         * @returns {Date}
         */
        function getDateMidpoint(d1, d2) {
            return createDateAtMidnight((d1.getTime() + d2.getTime()) / 2);
        }

        /**
         * Gets the week of the month that a given date occurs in.
         * @param {Date} date
         * @returns {number} Index of the week of the month (zero-based).
         */
        function getWeekOfMonth(date) {
            var firstDayOfMonth = getFirstDateOfMonth(date);
            var pfirstDayOfMonth = moment(firstDayOfMonth);
            var pd = moment(date);
            return Math.floor((pfirstDayOfMonth.day() + pd.jDate() - 1) / 7);
        }

        /**
         * Gets a new date incremented by the given number of days. Number of days can be negative.
         * @param {Date} date
         * @param {number} numberOfDays
         * @returns {Date}
         */
        function incrementDays(date, numberOfDays) {
            return moment(date).add(numberOfDays, 'day').toDate();
        }

        /**
         * Gets a new date incremented by the given number of months. Number of months can be negative.
         * If the date of the given month does not match the target month, the date will be set to the
         * last day of the month.
         * @param {Date} date
         * @param {number} numberOfMonths
         * @returns {Date}
         */
        function incrementMonths(date, numberOfMonths) {
            return moment(date).add(numberOfMonths, 'jMonth').toDate();
        }

        /**
         * Get the integer distance between two months. This *only* considers the month and year
         * portion of the Date instances.
         *
         * @param {Date} start
         * @param {Date} end
         * @returns {number} Number of months between `start` and `end`. If `end` is before `start`
         *     chronologically, this number will be negative.
         */
        function getMonthDistance(start, end) {
            var pstart = moment(start);
            var pend = moment(end);
            return (12 * (pend.jYear() - pstart.jYear())) + (pend.jMonth() - pstart.jMonth());
        }

        /**
         * Gets the last day of the month for the given date.
         * @param {Date} date
         * @returns {Date}
         */
        function getLastDateOfMonth(date) {
            return moment(date).endOf('jMonth');
        }

        /**
         * Checks whether a date is valid.
         * @param {Date} date
         * @return {boolean} Whether the date is a valid Date.
         */
        function isValidDate(date) {
            return date && date.getTime && !isNaN(date.getTime());
        }

        /**
         * Sets a date's time to midnight.
         * @param {Date} date
         */
        function setDateTimeToMidnight(date) {
            if (isValidDate(date)) {
                date.setHours(0, 0, 0, 0);
            }
        }

        /**
         * Creates a date with the time set to midnight.
         * Drop-in replacement for two forms of the Date constructor:
         * 1. No argument for Date representing now.
         * 2. Single-argument value representing number of seconds since Unix Epoch
         * or a Date object.
         * @param {number|Date=} opt_value
         * @return {Date} New date with time set to midnight.
         */
        function createDateAtMidnight(opt_value) {
            var date;
            if (angular.isUndefined(opt_value)) {
                date = new Date();
            } else {
                date = new Date(opt_value);
            }
            setDateTimeToMidnight(date);
            return date;
        }

        /**
         * Checks if a date is within a min and max range, ignoring the time component.
         * If minDate or maxDate are not dates, they are ignored.
         * @param {Date} date
         * @param {Date} minDate
         * @param {Date} maxDate
         */
        function isDateWithinRange(date, minDate, maxDate) {
            var dateAtMidnight = createDateAtMidnight(date);
            var minDateAtMidnight = isValidDate(minDate) ? createDateAtMidnight(minDate) : null;
            var maxDateAtMidnight = isValidDate(maxDate) ? createDateAtMidnight(maxDate) : null;
            return (!minDateAtMidnight || minDateAtMidnight <= dateAtMidnight) &&
                (!maxDateAtMidnight || maxDateAtMidnight >= dateAtMidnight);
        }

        /**
         * Gets a new date incremented by the given number of years. Number of years can be negative.
         * See `incrementMonths` for notes on overflow for specific dates.
         * @param {Date} date
         * @param {number} numberOfYears
         * @returns {Date}
         */
        function incrementYears(date, numberOfYears) {
            return incrementMonths(date, numberOfYears * 12);
        }

        /**
         * Get the integer distance between two years. This *only* considers the year portion of the
         * Date instances.
         *
         * @param {Date} start
         * @param {Date} end
         * @returns {number} Number of months between `start` and `end`. If `end` is before `start`
         *     chronologically, this number will be negative.
         */
        function getYearDistance(start, end) {
            var pstart = moment(start);
            var pend = moment(end);
            return pend.jYear() - pstart.jYear();
        }

        /**
         * Clamps a date between a minimum and a maximum date.
         * @param {Date} date Date to be clamped
         * @param {Date=} minDate Minimum date
         * @param {Date=} maxDate Maximum date
         * @return {Date}
         */
        function clampDate(date, minDate, maxDate) {
            var boundDate = date;
            if (minDate && date < minDate) {
                boundDate = new Date(minDate.getTime());
            }
            if (maxDate && date > maxDate) {
                boundDate = new Date(maxDate.getTime());
            }
            return boundDate;
        }

        /**
         * Extracts and parses the timestamp from a DOM node.
         * @param  {HTMLElement} node Node from which the timestamp will be extracted.
         * @return {number} Time since epoch.
         */
        function getTimestampFromNode(node) {
            if (node && node.hasAttribute('data-timestamp')) {
                return Number(node.getAttribute('data-timestamp'));
            }
        }

        /**
         * Checks if a month is within a min and max range, ignoring the date and time components.
         * If minDate or maxDate are not dates, they are ignored.
         * @param {Date} date
         * @param {Date} minDate
         * @param {Date} maxDate
         */
        function isMonthWithinRange(date, minDate, maxDate) {
            var pminDate = minDate ? moment(minDate) : null;
            var pmaxDate = maxDate ? moment(maxDate) : null;

            var pmonth = moment(date).jMonth();
            var pyear = moment(date).jYear();

            return (!pminDate || pminDate.jYear() < pyear || pminDate.jMonth() <= pmonth) &&
                (!pmaxDate || pmaxDate.jYear() > pyear || pmaxDate.jMonth() >= pmonth);
        }
    });
})();