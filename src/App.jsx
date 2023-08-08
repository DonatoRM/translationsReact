import { Suspense } from 'react';
import Title from './components/Title';
import { useTranslation } from 'react-i18next';

const App = () => {
	const { t } = useTranslation();
	return (
		<Suspense fallback={'Cargando traducciones'}>
			<Title name={t('title.message')} />
		</Suspense>
	);
};

export default App;
