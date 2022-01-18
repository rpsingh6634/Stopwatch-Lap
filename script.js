function calculatePeriod(t1, t2) {
        var dt = t2 - t1;

        var units = [
            {name: 'milliseconds', scale: 1000},
            {name: 'seconds', scale: 60},
            {name: 'minutes', scale: 60},
            {name: 'hours', scale: 24}
        ];

        var result = { };

        for(var i = 0; i < units.length; ++i) {
            var unit = units[i];

            var total = Math.floor(dt / unit.scale);
            var rest = dt - total * unit.scale;

            result[unit.name] = rest;

            dt = total;
        }

        result.days = dt;

        return result;
    }

    function padLeft(number, length, character) {
        if(character == null)
            character = '0';

        var result = number.toString();

        for(var i = result.length; i < length; ++i) {
            result = character + result;
        }

        return result;
    }
    
    function renderTime(t1, t2) {
    	var period = calculatePeriod(t1, t2);

        var text = '';

        if (period.days) {
          text += padLeft(period.days, 2) + ' days ';
        }

        text += padLeft(period.hours, 2) + ':';
        text += padLeft(period.minutes, 2) + ':';
        text += padLeft(period.seconds, 2) + '.';
        text += padLeft(period.milliseconds, 3);

        return text;
    }