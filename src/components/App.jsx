import { ContactList } from './ContactList/ContactList';
import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import { FormContact } from './FormContact/FormContact';
import { Title } from './Title/Title';

export const App = () => {
  return (
    <Container>
      <Title title={'Phonebook'} />
      <FormContact />
      <Title title={'Contacts'} />
      <Filter />
      <ContactList />
    </Container>
  );
};
