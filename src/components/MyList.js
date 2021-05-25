import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { removeItemFromMyList } from '../redux/modules/myList';

const MyList = ({ dispatch, myList }) => {
  console.log(myList);
  return (
    <section>
      <h2>MyList</h2>
      <div className="card-list">
        {myList.map((item) => (
          <Card
            key={item.id}
            item={item}
            buttonText="Remove"
            onClick={() => dispatch(removeItemFromMyList(item))}
          />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = ({ myList }) => ({
  myList: myList.data,
});

export default connect(mapStateToProps)(MyList);
