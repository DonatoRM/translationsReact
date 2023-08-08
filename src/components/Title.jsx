import { useTranslation } from 'react-i18next';
import style from './Title.module.css';

const Title = ({ name, ...props }) => {
	const { t, i18n } = useTranslation();
	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>{name}</h1>
			<select
				value={i18n.language}
				onChange={ev => i18n.changeLanguage(ev.target.value)}
			>
				<option value='es'>{t('title.languageButtonSpanish')}</option>
				<option value='en'>{t('title.languageButtonEnglish')}</option>
				<option value='gl'>{t('title.languageButtonGalician')}</option>
			</select>
		</div>
	);
};

export default Title;
