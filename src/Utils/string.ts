export function getText(html: any) {
	const divContainer = document.createElement('div');
	divContainer.innerHTML = html;
	return divContainer.textContent || divContainer.innerText || '';
}

export function formatMoney(amount: any, suffix = '￥') {
	return `${amount}${suffix}`;
}

export function formatOption(text: any, options: any) {
	return options.find((opt: any) => opt.value === text.trim())?.label || '';
}

export function stripHTML(string: any) {
	const tmp = document.createElement('DIV');
	tmp.innerHTML = string;
	return tmp.textContent || tmp.innerText || '';
}

export function renderQuestionType(t: any, type: any) {
	switch (type) {
		case 'CHOOSE_MANY':
			return t('unit_setting:question_setting.multiple_choice');
		case 'DESCRIPTION':
			return t('unit_setting:question_setting.description_choice');
		case 'SELECT_ONE':
			return t('unit_setting:question_setting.single_choice');
		default:
			return '-';
	}
}

export function renderTypeAnswer(t: any, type: any) {
	switch (type) {
		case 'UNREQUIRED':
			return t('common:label_optional');
		case 'REQUIRED':
			return t('common:label_required');
		default:
			return '-';
	}
}

export function camel2Text(key: any) {
	const result = key.replace(/([A-Z])/g, ' $1');
	const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
	return finalResult;
}

export const decodePath = (path: any) => {
	const arr = path.split('/');
	arr.shift();
	return arr;
};

export function formatIdEle(text: string) {
	return text.toLocaleLowerCase().replaceAll(' ', '');
}

export const shortAddress = (value: string, n = 6, nlast = 6, v = 13) => {
  if (value?.length <= v) { return value }
  const subString = value?.substr(0, n)
  const lastSubString = value?.substr(value.length - nlast, value.length)
  return `${subString}...${lastSubString}`
}