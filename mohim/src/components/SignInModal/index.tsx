import React from 'react';
import {Auth} from 'aws-amplify';
import {View, Text, Image, Modal, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const SignInModal = ({
  fetchUser,
  modalVisibility,
  setModalVisiblity,
}: {
  fetchUser: () => void;
  modalVisibility: boolean;
  setModalVisiblity: (arg0: boolean) => void;
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisibility}>
      <Pressable
        onPress={() => setModalVisiblity(!modalVisibility)}
        style={styles.modalRoot}>
        <View style={styles.modalButtonContainer}>
          <Text style={styles.modalTitle}>Sign in to continue</Text>
          <View style={{}}>
            <Pressable
              onPress={async () => {
                await Auth.federatedSignIn({provider: 'Google'}).then(() =>
                  fetchUser(),
                );
                return;
              }}
              style={styles.googlePress}>
              <Image
                style={styles.googleLogo}
                source={require('../../data/Google-Symbol.png')}
              />
              <Text style={styles.googleText}> Sign in with Google</Text>
            </Pressable>
            <Pressable
              onPress={async () => {
                await Auth.federatedSignIn({provider: 'Facebook'}).then(() =>
                  fetchUser(),
                );
                return;
              }}
              style={styles.facebookPress}>
              <AntDesign name="facebook-square" color={'white'} size={25} />
              <Text style={styles.facebookText}> Sign in with Facebook</Text>
            </Pressable>
            <Pressable
              onPress={async () => {
                await Auth.federatedSignIn({provider: 'SignInWithApple'}).then(
                  () => fetchUser(),
                );
                return;
              }}
              style={styles.applePress}>
              <AntDesign name="apple1" color={'white'} size={25} />
              <Text style={styles.appleText}> Sign in with Apple</Text>
            </Pressable>
            <Pressable
              onPress={() => Auth.federatedSignIn()}
              style={styles.hostedUIPress}>
              <Image
                style={styles.mhmLogo}
                source={require('../../logo/logoT4.png')}
              />
              <Text style={styles.hostedUIText}> MHM username</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default SignInModal;
