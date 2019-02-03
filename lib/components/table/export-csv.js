'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function has(browser) {
    var ua = navigator.userAgent;
    if (browser === 'ie') {
        var isIE = ua.indexOf('compatible') > -1 && ua.indexOf('MSIE') > -1;
        if (isIE) {
            var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
            reIE.test(ua);
            return parseFloat(RegExp['$1']);
        } else {
            return false;
        }
    } else {
        return ua.indexOf(browser) > -1;
    }
}

var csv = {
    _isIE11: function _isIE11() {
        var iev = 0;
        var ieold = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
        var trident = !!navigator.userAgent.match(/Trident\/7.0/);
        var rv = navigator.userAgent.indexOf('rv:11.0');

        if (ieold) {
            iev = Number(RegExp.$1);
        }
        if (navigator.appVersion.indexOf('MSIE 10') !== -1) {
            iev = 10;
        }
        if (trident && rv !== -1) {
            iev = 11;
        }

        return iev === 11;
    },
    _isEdge: function _isEdge() {
        return (/Edge/.test(navigator.userAgent)
        );
    },
    _getDownloadUrl: function _getDownloadUrl(text) {
        var BOM = '\uFEFF';

        if (window.Blob && window.URL && window.URL.createObjectURL) {
            var csvData = new Blob([BOM + text], { type: 'text/csv' });
            return URL.createObjectURL(csvData);
        } else {
            return 'data:attachment/csv;charset=utf-8,' + BOM + encodeURIComponent(text);
        }
    },
    download: function download(filename, text) {
        if (has('ie') && has('ie') < 10) {
            var oWin = window.top.open('about:blank', '_blank');
            oWin.document.charset = 'utf-8';
            oWin.document.write(text);
            oWin.document.close();
            oWin.document.execCommand('SaveAs', filename);
            oWin.close();
        } else if (has('ie') === 10 || this._isIE11() || this._isEdge()) {
            var BOM = '\uFEFF';
            var csvData = new Blob([BOM + text], { type: 'text/csv' });
            navigator.msSaveBlob(csvData, filename);
        } else {
            var link = document.createElement('a');
            link.download = filename;
            link.href = this._getDownloadUrl(text);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};

exports.default = csv;