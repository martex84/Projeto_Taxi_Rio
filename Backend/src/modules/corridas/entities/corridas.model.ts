import { Column, DataType, Model, Table } from 'sequelize-typescript';
import type {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

@Table({ tableName: 'corridas' })
export class CorridasModel extends Model<
  InferAttributes<CorridasModel>,
  InferCreationAttributes<CorridasModel>
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: CreationOptional<number>;

  @Column({
    type: DataType.DATE,
  })
  declare createdAt: Date;

  @Column({
    type: DataType.STRING,
  })
  declare usuario: string;

  @Column({
    type: DataType.STRING,
  })
  declare motorista: string;

  @Column({
    type: DataType.STRING,
  })
  declare status: string;

  @Column({
    type: DataType.STRING,
  })
  declare destino: string;
}
