import React, { FC, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

type NewEvent = {
  name: string;
  place: string;
  address: string;
  description: string;
};

const CreateEventScreen: FC = () => {
  const [values, setValues] = useState<NewEvent>({
    name: '',
    description: '',
    address: '',
    place: ''
  });

  const handleTextInputChange = (name: keyof NewEvent) => (value: string) => {
    setValues({ ...values, [name]: value });
  };

  const handleButtonClick = () => {
    alert('Новое мероприятие будет создано');
  };

  return (
    <View>
      <View>
        <Text>Наименование</Text>
        <TextInput value={values.name} onChangeText={handleTextInputChange('name')} />
      </View>
      <View>
        <Text>Описание</Text>
        <TextInput value={values.description} onChangeText={handleTextInputChange('description')} />
      </View>
      <View>
        <Text>Место</Text>
        <TextInput value={values.place} onChangeText={handleTextInputChange('place')} />
      </View>
      <View>
        <Text>Адрес</Text>
        <TextInput value={values.address} onChangeText={handleTextInputChange('address')} />
      </View>
      <Button title="Создать" onPress={handleButtonClick} />
    </View>
  );
};

export default CreateEventScreen;
