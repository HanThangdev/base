export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
export const USER_URL: any = process.env.REACT_APP_USER_URL;

export const ANTD_UPLOAD_STATUS = {
	UPLOADING: 'uploading',
	DONE: 'done',
};

export const TABLE_CHANGE_ACTION = {
	PAGING: 'paginate',
	FILTER: 'filter',
	SORT: 'sort',
};

export const SIGNAL_TYPE = {
	LOGOUT: 1,
};

export const KEY_TYPE = {
	ENTER: 'Enter',
};

export const ANTD_ORDER_TO_API_FIELD = {
	descend: 'DESC',
	ascend: 'ASC',
};

export const FAQ_TABNAME = {
	INVESTOR: 'Investor FAQ',
	FUND_MANAGER: 'Fund Manager FAQ',
};

export const FORMAT_TIME = {
	YEAR_MONTH_DATE: 'YYYY/MM/DD',
	DATE_HOUR_MINUTES: 'YYYY/MM/DD HH:mm',
	DATE_HOUR_MINUTES_SECOND: 'YYYY-MM-DD HH:mm:ss',
	HOUR_MINUTES: 'HH:mm',
	YEAR_MONTH_DATE_LOWER: 'YYYY-MM-DD',
	HOUR_MINUES_LOWER: 'HH:mm',
	HOUR_MINUES_SECOND: 'HH:mm:ss',
	MINUES_SECOND_LOWER: 'mm:ss',
	FULL_DATE: 'YYYY/MM/DD HH:mm',
};

export const mapMimeToExt = {
	'audio/aac': 'aac',
	'application/x-abiword': 'abw',
	'application/x-freearc': 'arc',
	'video/x-msvideo': 'avi',
	'application/vnd.amazon.ebook': 'azw',
	'application/octet-stream': 'bin',
	'image/bmp': 'bmp',
	'application/x-bzip': 'bz',
	'application/x-bzip2': 'bz2',
	'application/x-cdf': 'cda',
	'application/x-csh': 'csh',
	'text/css': 'css',
	'text/csv': 'csv',
	'application/msword': 'doc',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
		'docx',
	'application/vnd.ms-fontobject': 'eot',
	'application/epub+zip': 'epub',
	'application/gzip': 'gz',
	'image/gif': 'epub',
	'text/html': 'html',
	'image/vnd.microsoft.icon': 'ico',
	'text/calendar': 'ics',
	'application/java-archive': 'jar',
	'image/jpeg': 'jpg',
	'text/javascript': 'js',
	'application/json': 'json',
	'application/ld+json': 'jsonld',
	'audio/midi audio/x-midi': 'midi',
	'audio/mpeg': 'mp3',
	'video/mp4': 'mp4',
	'video/mpeg': 'mpeg',
	'application/vnd.apple.installer+xml': 'mpkg',
	'application/vnd.oasis.opendocument.presentation': 'odp',
	'application/vnd.oasis.opendocument.spreadsheet': 'ods',
	'application/vnd.oasis.opendocument.text': 'odt',
	'audio/ogg': 'oga',
	'video/ogg': 'ogv',
	'application/ogg': 'ogx',
	'audio/opus': 'opus',
	'font/otf': 'otf',
	'image/png': 'png',
	'application/pdf': 'pdf',
	'application/x-httpd-php': 'php',
	'application/vnd.ms-powerpoint': 'ppt',
	'application/vnd.openxmlformats-officedocument.presentationml.presentation':
		'pptx',
	'application/vnd.rar': 'rar',
	'application/rtf': 'rtf',
	'application/x-sh': 'sh',
	'image/svg+xml': 'svg',
	'application/x-shockwave-flash': 'swf',
	'application/x-tar': 'tar',
	'image/tiff': 'tiff',
	'video/mp2t': 'ts',
	'font/ttf': 'ttf',
	'text/plain': 'txt',
	'application/vnd.visio': 'vsd',
	'audio/wav': 'wav',
	'audio/webm': 'weba',
	'video/webm': 'webm',
	'image/webp': 'webp',
	'font/woff': 'woff',
	'font/woff2': 'woff2',
	'application/xhtml+xml': 'xhtml',
	'application/vnd.ms-excel': 'xls',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
	'application/xml': 'xml',
	'application/vnd.mozilla.xul+xml': 'xul',
	'application/zip': 'zip',
	'video/3gpp': '3gp',
	'video/3gpp2': '3g2',
	'application/x-7z-compressed': '7z',
	'video/quicktime': 'MOV',
};

export const MILION_UNIT = 1000000

export const ERC20Test = '0x10cED108C2F0f793bb7B9D014667a1D29E2A226B'

export const DEFAULT_VISIBLE_MODAL = {
	success:false,
  confirming:false,
  error:false
}

export const CALCULATE = {
	PAID_YEAR: 10,
	GOEMON_ADMIN_FEES_PERCENT: 0.15/100,
	GOEMON_ADMIN_FEES:0.15,
	MAX_INVEST_PER_QUARTER:999999999,
	MIN_INVEST_PER_QUARTER:4999,
	MIN_MANAGEMENT_FEE:-0.001,
	MAX_MANAGEMENT_FEE:3,
	MIN_CARRY:0.09,
	MAX_CARRY:30.001,
	MIN_EXPECTED_RETURN_MULTIPLE:0.999,
	MAX_EXPECTED_RETURN_MULTIPLE:100.001,
}