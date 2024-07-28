import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { Box, Center, HStack, Image, Text, VStack } from "native-base";
import InputLabel from "../../components/InputLabel";
import CustomButton from "../../components/CustomButton";
import BoxContainer from "../../components/BoxContainer";
import { useDispatch } from "react-redux";
import { removeLoading, setLoading } from "../../store/loading.reducer";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDb } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import { setUser } from "../../store/user.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUserProfile } from "../../type/user";
import { screenWidth } from "../../data/utils";

type Props = {} & NativeStackScreenProps<RootStackParams, "Auth"> & any;

const Login = (props: Props) => {
  const { navigation } = props;
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const onForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUp = () => {
    navigation.navigate("SignUp");
  };

  const handleLogIn = async () => {
    dispatch(setLoading());
    try {
      const docRef = doc(firebaseDb, "users", phone);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.password !== password) {
          Alert.alert("Sai mật khẩu");
        } else {
          const userProfile = {
            ...data,
          };
          await AsyncStorage.setItem("phone", phone);
          dispatch(setUser(userProfile as IUserProfile));
        }
      } else {
        // docSnap.data() will be undefined in this case
        Alert.alert("Số điện thoại chưa đăng ký");
      }
    } catch (err) {
      Alert.alert("Lỗi đăng nhập");
      console.error(err);
    } finally {
      dispatch(removeLoading());
    }
  };
  return (
    <BoxContainer justifyContent={"center"} alignItems={"center"} px={6}>
      <VStack flex={1} justifyContent={"center"} space={4}>
        <Center>
          <Image
            source={require("../../../assets/logo.png")}
            style={{
              width: screenWidth * 0.6,
              height: screenWidth * 0.6,
              marginBottom: 8,
            }}
            resizeMode="contain"
            alt="logo-app"
          />
        </Center>
        <InputLabel
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
          value={phone}
          onChangeText={setPhone}
        />
        <InputLabel
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          secureTextEntry={true}
          showIcon={true}
          value={password}
          onChangeText={setPassword}
        />
        <HStack justifyContent={"space-between"} mb={6}>
          <Box>
            {error && (
              <Text fontSize={12} fontWeight={400} color="error.500">
                {error}
              </Text>
            )}
          </Box>
          <TouchableOpacity onPress={onForgotPassword}>
            <Text
              fontSize={12}
              color={"text.600"}
              textDecorationLine={"underline"}
            >
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
        </HStack>
        <Box px={"20%"}>
          <CustomButton btnText={"Đăng nhập"} handleBtn={handleLogIn} />
        </Box>
      </VStack>
      <HStack mb={16} space={1}>
        <Text fontWeight={400} fontSize={14}>
          Bạn chưa có tài khoản?
        </Text>
        <TouchableOpacity onPress={onSignUp}>
          <Text
            fontWeight={400}
            fontSize={14}
            color={"primary.600"}
            textDecorationLine={"underline"}
          >
            Đăng ký
          </Text>
        </TouchableOpacity>
      </HStack>
    </BoxContainer>
  );
};

export default Login;

const styles = StyleSheet.create({});
