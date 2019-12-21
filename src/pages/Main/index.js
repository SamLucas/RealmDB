import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {
  Container,
  Title,
  Form,
  Input,
  Submit,
  IconAdd,
  List,
  Loading,
} from './styles';
import Repository from '~/components/repository';

import api from '~/services/api';
import getRealm from '~/services/realm';
import {isDeclaredPredicate} from '@babel/types';

export default function Main() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const [repositories, setRepositories] = useState('');

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      watchers: repository.subscribers_count,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    const realm = await getRealm();
    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });

    return data;
  }

  async function handleAddRepository() {
    setloading(true);
    try {
      const response = await api.get(`/repos/${input}`);
      await saveRepository(response.data);
      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
    }
    setloading(false);
  }

  // async function handleDelRepository(repository) {
  //   const realm = await getRealm();
  //   realm.write(() => realm.delete(repository));
  //   const data = realm.objects('Repository').sorted('stars', true);
  //   setRepositories(data);
  // }

  async function handleRefreshRepository(dados_repo) {
    const response = await api.get(`/repos/${dados_repo.fullName}`);
    const data = await saveRepository(response.data);
    setRepositories(
      repositories.map(repo => (repo.id == data.id ? data : repo)),
    );
  }

  useEffect(() => {
    async function loadRepository() {
      const realm = await getRealm();
      const data = realm.objects('Repository').sorted('stars', true);
      setRepositories(data);
    }
    loadRepository();
  }, []);

  return (
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input
          autocCapitalize="none"
          autoCorrect={false}
          error={error}
          placeholder="Procurar repositório..."
          value={input}
          editable={!loading}
          onChangeText={setInput}
          keyboardShouldPersistTaps="handle"
        />
        <Submit onPress={handleAddRepository}>
          {loading ? <Loading /> : <IconAdd />}
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handle"
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Repository
            data={item}
            onRefresh={() => handleRefreshRepository(item)}
            // deleteItem={() => handleDelRepository(item)}
          />
        )}
      />
    </Container>
  );
}
