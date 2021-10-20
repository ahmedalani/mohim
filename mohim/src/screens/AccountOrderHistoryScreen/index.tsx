import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';

import styles from './styles';

// Data
import {API} from 'aws-amplify';
import * as queries from '../../graphql/queries';
import {Order} from '../../models';

const d = [
  {date: '12/12/2021', totalQuantity: 4, totalPrice: 32.15},
  {date: '12/12/2021', totalQuantity: 4, totalPrice: 32.15},
  {date: '12/12/2021', totalQuantity: 4, totalPrice: 32.15},
];
const AccountOrderHistoryScreen = ({
  user,
}: {
  user: {
    attributes: {
      username: string;
      phonenumber: string;
      email: string;
      sub: string;
    };
  } | null;
}) => {
  const [ordersList, setOrdersList] = useState<
    {id: string; date: string; totalQuantity: number; totalPrice: number}[]
  >([]);

  useEffect(() => {
    let totalqty = 0;
    const getCartProducts = async (cID: string) => {
      try {
        const filter = {
          cartID: {eq: cID},
        };
        const queryResponse = await API.graphql({
          query: queries.listCartProducts,
          variables: {filter, limit: 5000},
        });
        if (queryResponse.data) {
          totalqty = queryResponse.data.listCartProducts?.items.length;
        }
      } catch (err) {
        console.log('AccountOrderHistoryScreen query cartProducts: err', err);
      }
      return totalqty;
    };
    const fetchOrders = async () => {
      let newOrderListState: typeof ordersList = [];
      const filter = {
        userSub: {eq: user?.attributes.sub},
      };
      try {
        const queryResponse = await API.graphql({
          query: queries.listOrders,
          variables: {filter, limit: 5000},
        });
        if (queryResponse.data) {
          await getCartProducts(queryResponse.data.listOrders?.items[0].cartID);
          // console.log('o is: ', queryResponse.data.listOrders.items);
          queryResponse.data.listOrders?.items.forEach((o: Order) => {
            const orderDetails = {
              id: o.id,
              date: o.createdAt || '0000-00-00',
              totalQuantity: totalqty,
              totalPrice: o.totalPrice || 0,
            };
            newOrderListState.push(orderDetails);
          });
        }
      } catch (err) {
        console.log('AccountOrderHistoryScreen query orders err: ', err);
      }

      setOrdersList(newOrderListState);
    };
    fetchOrders();
  }, [user]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Order History: {user?.attributes.email}</Text>
      <FlatList
        style={styles.ordersView}
        data={ordersList}
        renderItem={({item}) => (
          <Pressable
            key={item.id}
            style={styles.order}
            onPress={() => console.log(item)}>
            <Text>{item.date}</Text>
            <Text>{item.totalQuantity} items</Text>
            <Text>total: ${item.totalPrice}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default AccountOrderHistoryScreen;
