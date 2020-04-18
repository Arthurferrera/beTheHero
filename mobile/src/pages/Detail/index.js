import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá ONG, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha Abandonada" com o valor de R$120,00';

  function backPage() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha abandonada',
      recipients: ['arthur_f.oliveira@hotmail.com'],
      body: message,
    })
  }

  function sendMessageWhatsapp() {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={backPage}
        >
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>

        <Image source={logoImg} />
      </View>

        <View style={styles.incident}>
           <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
          <Text style={styles.incidentValue}>ONG ITAPEVI</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>Cadelinha abandonada.</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity
              onPress={sendMessageWhatsapp}
              style={styles.action}
            >
              <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={sendMail}
              style={styles.action}
            >
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}