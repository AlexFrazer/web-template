import * as React from 'react';
import { I18nContextValues } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Header } from './styles';

export interface Props extends I18nContextValues {}

export default function Home({ t }: Props) {
  return (
    <React.Suspense fallback={<div />}>
      <Header>{t('greeting')}</Header>
    </React.Suspense>
  );
}
