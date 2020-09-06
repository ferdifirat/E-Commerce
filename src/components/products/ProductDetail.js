import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";
const ProductDetail = ({ categories, product, onSave, onChange,errors }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Ürün Güncelle" : "Ürün Ekle"}</h2>
      <TextInput
        name="productName"
        label="Ürün Adı"
        value={product.productName}
        onChange={onChange}
        error={errors.productName}
      ></TextInput>

      <SelectInput
        name="categoryId"
        label="Kategori"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error={errors.categoryId}
      />

      <TextInput
        name="unitPrice"
        label="Fiyat"
        value={product.unitPrice}
        onChange={onChange}
        error={errors.unitPrice}
      ></TextInput>

      <TextInput
        name="quantityPerUnit"
        label="Birim adedi"
        value={product.quantityPerUnit}
        onChange={onChange}
        error={errors.quantityPerUnit}
      ></TextInput>

      <TextInput
        name="unitsInStock"
        label="Stok miktarı"
        value={product.unitsInStock}
        onChange={onChange}
        error={errors.unitsInStock}
      ></TextInput>

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};

export default ProductDetail;
