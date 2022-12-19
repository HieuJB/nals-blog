export function AMapper<T = any, S = any>() {
  abstract class Mapper {
    /**
     * Convert entity to model
     */
    static toModel: (value: S) => T

    /**
     * Convert model to entity
     */
    static toEntity: (value: T) => S
  }

  return Mapper
}
