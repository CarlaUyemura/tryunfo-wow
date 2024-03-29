import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      onInputChange,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        Nome da carta
        <label htmlFor="name-card">
          <input
            data-testid="name-input"
            type="text"
            id="name-card"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        Descrição
        <label htmlFor="description">
          <textarea
            data-testid="description-input"
            type="text"
            id="description"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <div className="container-numbers">
          Força
          <label htmlFor="attr1">
            <input
              className="numbers"
              data-testid="attr1-input"
              type="number"
              id="attr1"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          Velocidade
          <label htmlFor="attr2">
            <input
              className="numbers"
              data-testid="attr2-input"
              type="number"
              id="attr2"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          Magia
          <label htmlFor="attr3">
            <input
              className="numbers"
              data-testid="attr3-input"
              type="number"
              id="attr3"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        Imagem
        <label htmlFor="image">
          <input
            data-testid="image-input"
            type="text"
            id="image"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <div className="container-rare">
          <div className="container-select">
            Raridade
            <label htmlFor="rare">
              <select
                className="raridade"
                data-testid="rare-input"
                id="rare"
                name="cardRare"
                value={ cardRare }
                onChange={ onInputChange }
              >
                <option value="normal">Normal</option>
                <option value="raro">Raro</option>
                <option value="muito raro">Muito raro</option>
              </select>
            </label>
          </div>
          {
            !hasTrunfo
              ? (
                <label htmlFor="trunfo">
                  Carta Super Trunfo
                  <input
                    className="trunfo"
                    data-testid="trunfo-input"
                    type="checkbox"
                    id="trunfo"
                    name="cardTrunfo"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              )
              : <h3>Você já tem um Super Trunfo em seu baralho!</h3>
          }
        </div>
        <button
          className="button-save"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
