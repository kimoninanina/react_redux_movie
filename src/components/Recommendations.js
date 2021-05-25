import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

import { addItemToMyList } from '../redux/modules/myList';

const Recommendations = ({ dispatch, recommendations }) => (
  <section>
    <h2>Recommendations</h2>
    <div className="card-list">
      {recommendations.map((item) => (
        <Card
          key={item.id}
          item={item}
          buttonText="Add"
          onClick={() => dispatch(addItemToMyList(item))}
        />
      ))}
    </div>
  </section>
);

const mapStateToProps = ({ recommendations }) => ({
  recommendations: recommendations.data,
});

export default connect(mapStateToProps)(Recommendations);
