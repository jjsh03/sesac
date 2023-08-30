// visitor 모델 정의

const Visitor = (Sequelize, DataTypes) => {
  // Sequelize: models/index.js 에서 sequelize
  // Datatypes: models/index.js 에서 Sequelize
  const model = Sequelize.define(
    'visitor',
    {
      id: {
        // id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        // name VARCHAR(10) NOT NULL,
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment MEDIUMTEXT
        type: DataTypes.TEXT('medium'),
      },
    },
    {
      tableName: 'visitor', // 실제 db 테이블명
      freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
      timestamps: false, // true: createAt, updateAt 컬럼 자동 생성
    }
  );

  return model;
};

module.exports = Visitor;
