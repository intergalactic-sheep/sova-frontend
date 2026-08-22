// Типы пунктов меню
type MenuItem = 
  | { type: 'page'; label: string; path: string }
  | { type: 'tag'; label: string; tagSlug: string }
  | { type: 'external'; label: string; url: string };

export const menuItems: MenuItem[] = [
  { type: 'page', label: 'Главная', path: '/' },
  { type: 'tag', label: 'Новости', tagSlug: 'news' },
  { type: 'tag', label: 'Феминизм', tagSlug: 'feminism' },
  { type: 'tag', label: 'История', tagSlug: 'history' },
  { type: 'tag', label: 'Социальное', tagSlug: 'social' },
  { type: 'tag', label: 'Культура', tagSlug: 'culture' },
  { type: 'tag', label: 'Книги', tagSlug: 'books' },
  { type: 'tag', label: 'ФемТех', tagSlug: 'fem-tech' },
  { type: 'external', label: 'Поддержать', url: 'https://dzen.ru/id/67102d4fc6ec2e283cd4d477?donate=true' },
  { type: 'tag', label: 'Контакты', tagSlug: 'contacts' },
];
