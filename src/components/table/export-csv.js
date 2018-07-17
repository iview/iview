function has (browser) {
    const ua = navigator.userAgent;
    if (browser === 'ie') {
        const isIE = ua.indexOf('compatible') > -1 && ua.indexOf('MSIE') > -1;
        if (isIE) {
            const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
            reIE.test(ua);
            return parseFloat(RegExp['$1']);
        } else {
            return false;
        }
    } else {
        return ua.indexOf(browser) > -1;
    }
}

const csv = {
    _isIE11 () {
        let iev = 0;
        const ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
        const trident = !!navigator.userAgent.match(/Trident\/7.0/);
        const rv = navigator.userAgent.indexOf('rv:11.0');

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

    _isEdge () {
        return /Edge/.test(navigator.userAgent);
    },

    _getDownloadUrl (text) {
        const BOM = '\uFEFF';
        // Add BOM to text for open in excel correctly
        if (window.Blob && window.URL && window.URL.createObjectURL && !has('Safari')) {
            const csvData = new Blob([BOM + text], { type: 'text/csv' });
            return URL.createObjectURL(csvData);
        } else {
            return 'data:attachment/csv;charset=utf-8,' + BOM + encodeURIComponent(text);
        }
    },

    download (filename, text) {
        if (has('ie') && has('ie') < 10) {
            // has module unable identify ie11 and Edge
            const oWin = window.top.open('about:blank', '_blank');
            oWin.document.charset = 'utf-8';
            oWin.document.write(text);
            oWin.document.close();
            oWin.document.execCommand('SaveAs', filename);
            oWin.close();
        } else if (has('ie') === 10 || this._isIE11() || this._isEdge()) {
            const BOM = '\uFEFF';
            const csvData = new Blob([BOM + text], { type: 'text/csv' });
            navigator.msSaveBlob(csvData, filename);
        } else {
            const link = document.createElement('a');
            link.download = filename;
            link.href = this._getDownloadUrl(text);
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};

export default csv;