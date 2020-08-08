import React from 'react';
import './App.css';
import MenuMakanan from './components/MenuMakanan/MenuMakanan'
import MenuMinuman from './components/MenuMakanan/MenuMinuman'


class App extends React.Component{

  constructor(props){
    super();
    this.state = {
      namaPembeli : '',
      jenisPembayaran : '',
      ulasanPembeli :'',
      namaresto : 'Restoran Warkop',
      Makanan :[
        { nama : 'ayam bakar' , harga : '15000' , stock : 10 },
        { nama : 'ayam godok' , harga : '11000' , stock : 5 },
        { nama : 'ayam geprek' , harga : '10000' , stock : 1 }
      ],
      Minuman :[
        { nama : 'Es jeruk' , harga : '15000' , stock : 10 },
        { nama : 'Es Oyen' , harga : '11000' , stock : 5 },
        { nama : 'Es Teh' , harga : '10000' , stock : 1 }
      ]
    }
  }

  handelGantiNama =(nama) =>{
    // this.setState({namaresto : 'Restoran Padang'})
    this.setState({ namaresto: nama})
  }
  handlegantinama = (ganti) =>{
    this.setState({ namaPembeli : ganti.target.value})
  }
  handlejenisPembayaran = (pembayaran ) =>{
    this.setState({ jenisPembayaran : pembayaran.target.value})
  }
  handleulsan =(ulasan) =>{
    this.setState({ ulasanPembeli : ulasan.target.value})
  }
  render(){
  return (
   <div className="App">
        <h1>{this.state.namaresto}</h1>
        <button className="btn btn-primary" onClick={ () => {this.handelGantiNama('UPDATE RESTO PADANG')}} >Ganti Nama Restoran</button>

        <div className="row" style={{marginTop: '10px'}}>
            <div className="col-md-4 offset-md-4">
                <form>
                    <div className="form-group">
                        <label>Nama Pembeli:  </label>
                        <input className="form-control" name="namaPembeli" onChange={this.handlegantinama} value={this.state.namaPembeli} />
                        <small>nama pembeli adalah : {this.state.namaPembeli}</small>
                    </div>

                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Ulasan</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="ulasan" onChange={this.handleulsan} value={this.state.ulasan}></textarea>
                      <small>Ulasan : {this.state.ulasanPembeli}</small>
                    </div>
                    
                    <label>Jenis Pembeayaran</label>
                    <select className="form-control form-control-sm" name="jenisPembayaran" onChange={this.handlejenisPembayaran} value={this.state.value}>
                      <option value="Lunas">Lunas</option>
                      <option value="tidakLunas">Tidak Lunas Lunas</option>
                    </select>
                    <small>Type Pembayaran : {this.state.jenisPembayaran}</small>
                </form>
               
                
            </div>
        </div>

        <h2>Menu Makanan</h2>
        <h2>Makanan ini</h2>
        <MenuMakanan
         nama ={this.state.Makanan[0].nama}
         harga ={this.state.Makanan[0].harga}
         stock ={this.state.Makanan[0].stock}
        />
        <MenuMakanan
         nama ={this.state.Makanan[1].nama}
         harga ={this.state.Makanan[1].harga}
         stock ={this.state.Makanan[1].stock}
        />
        <MenuMakanan
         nama ={this.state.Makanan[2].nama}
         harga ={this.state.Makanan[2].harga}
         stock ={this.state.Makanan[2].stock}
        />
        <h2>Menu Minuman</h2>
        {this.state.Minuman.map( list =>
        <MenuMinuman nama = {list.nama} harga= {list.harga }  stock= {list.stock} />
        )}

        

    </div>
  );
}
}

export default App;
