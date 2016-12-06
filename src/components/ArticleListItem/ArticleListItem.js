import React from 'react';;

class ArticleListItem extends React.Component {
  render() {
    return (
      <div className="article-list-item">
        <li>
          <h3>{this.props.headline}</h3>
        </li>
      </div>
    );
  }
}

export default ArticleListItem;