import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/layout/Footer";

export class about extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-about" />
        <Container>
          <h2 className="discount-tag mt-5">#ServingWithHeart</h2>
          <p className="mt-4">
            Klinik Alana berdiri tahun 2010 dan saat ini telah berkembang
            menjadi klinik terkemuka di Bandung dan Jawa Barat. Dengan visi
            untuk menjadi pusat kesehatan kulit dan gaya hidup pilihan
            masyarakat Indonesia, setiap staf Alana berkomitmen menciptakan
            pengalaman emosional kepada pasien melalui layanan kesehatan kelas
            dunia dan produk berkualitas tinggi.
          </p>
          <span>Nilai-nilai Alana</span>
          <ul className="list-about">
            <li>
              <em>Integrity</em> : Kami selalu berusaha melakukan hal yang benar
            </li>
            <li>
              <em>Ownership</em> : Kami semua bertindak sebagai pemilik, menjaga
              aset perusahaan seperti aset pribadi, dan mengutamakan kepentingan
              jangka panjang perusahaan
            </li>
            <li>
              <em>Trust</em> : Kami menghormati karyawan dan pelanggan Alana,
              memperlakukan mereka seperti kami ingin diperlakukan oleh orang
              lain. Kami yakin orang akan bekerja maksimal bila diberi
              kepercayaan
            </li>
            <li>
              <em>Leadership</em> : Kami membangun kemampuan untuk menyelesaikan
              tugas dan mengatasi hambatan-hambatan dalam organisasi
            </li>
            <li>
              <em>Passion to Win</em> : Kami bersemangat meningkatkan keahlian
              agar unggul dalam persaingan
            </li>
          </ul>
          <blockquote>
            <em>
              Saya bangga dengan pekerjaan saya, melihat pasien bahagia adalah
              impian saya setiap hari {" - "}
            </em>
            <strong> Sri Astuti </strong>
            General Manager Alana
          </blockquote>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

export default about;
