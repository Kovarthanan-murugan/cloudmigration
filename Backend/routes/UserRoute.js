import express from 'express';

/* === import Middleware === */
import { adminOnly, verifyUser } from '../middleware/AuthUser.js';

/* === import Controllers === */
import {
    getDataPegawai,
    getDataPegawaiByID,
    createDataPegawai,
    updateDataPegawai,
    deleteDataPegawai,
    getDataPegawaiByNik,
    getDataPegawaiByName,
    testLoadBalancer,
} from '../controllers/DataPegawai.js';

import {
    getDataJabatan,
    createDataJabatan,
    updateDataJabatan,
    deleteDataJabatan,
    getDataJabatanByID
} from "../controllers/DataJabatan.js";

import {
    viewDataKehadiran,
    createDataKehadiran,
    updateDataKehadiran,
    deleteDataKehadiran,
    viewDataKehadiranByID,
    viewDataGajiByName,
} from "../controllers/TransaksiController.js";

import {
    createDataPotonganGaji,
    deleteDataPotongan,
    viewDataPotonganByID,
    updateDataPotongan,
    viewDataPotongan
} from "../controllers/TransaksiController.js";

import {
    viewDataGajiPegawai,
    viewDataGajiPegawaiByMonth,
    viewDataGajiPegawaiByYear
} from "../controllers/TransaksiController.js";

import {
    viewLaporanAbsensiPegawaiByMonth,
    viewLaporanAbsensiPegawaiByYear,
    viewLaporanGajiPegawai,
    viewLaporanGajiPegawaiByMonth,
    viewLaporanGajiPegawaiByName,
    viewLaporanGajiPegawaiByYear,
    viewSlipGajiByMonth,
    viewSlipGajiByName,
    viewSlipGajiByYear,
} from "../controllers/LaporanController.js";

import { LogOut, changePassword } from '../controllers/Auth.js';
import {
    dashboardPegawai,
    viewDataGajiSinglePegawaiByMonth,
    viewDataGajiSinglePegawaiByYear
} from '../controllers/Pegawai.js';

const router = express.Router();

// Admin Route :

/* ==== Master Data ==== */
// Data Pegawai
router.get('/test-loadbalancer', testLoadBalancer);
router.get('/data_pegawai', getDataPegawai);
router.get('/data_pegawai/id/:id', getDataPegawaiByID);
router.get('/data_pegawai/nik/:nik', getDataPegawaiByNik);
router.get('/data_pegawai/name/:name', getDataPegawaiByName);
router.post('/data_pegawai', createDataPegawai);
router.patch('/data_pegawai/:id',  updateDataPegawai);
router.delete('/data_pegawai/:id',  deleteDataPegawai);
router.patch('/data_pegawai/:id/change_password',  changePassword);
// Data Jabatan
router.get('/data_jabatan',  getDataJabatan);
router.get('/data_jabatan/:id',  getDataJabatanByID);
router.post('/data_jabatan',  createDataJabatan);
router.patch('/data_jabatan/:id',  updateDataJabatan);
router.delete('/data_jabatan/:id',  deleteDataJabatan);

/* ==== Transaksi  ==== */
// Data Kehadiran
router.get('/data_kehadiran',  viewDataKehadiran);
router.get('/data_kehadiran/:id',   viewDataKehadiranByID);
router.post('/data_kehadiran', createDataKehadiran);
router.patch('/data_kehadiran/update/:id', updateDataKehadiran);
router.delete('/data_kehadiran/:id',  deleteDataKehadiran);
// Data Potongan
router.get('/data_potongan', viewDataPotongan);
router.get('/data_potongan/:id',  viewDataPotonganByID);
router.post('/data_potongan',  createDataPotonganGaji);
router.patch('/data_potongan/update/:id',  updateDataPotongan);
router.delete('/data_potongan/:id',  deleteDataPotongan);
// Data Gaji
router.get('/data_gaji_pegawai', viewDataGajiPegawai);
router.get('/data_gaji/name/:name',  viewDataGajiByName);
router.get('/data_gaji_pegawai/month/:month', viewDataGajiPegawaiByMonth);
router.get('/data_gaji_pegawai/year/:year', viewDataGajiPegawaiByYear);

/* ====  Laporan  ==== */
// laporan Gaji Pegawai
router.get('/laporan/gaji', viewLaporanGajiPegawai);
router.get('/laporan/gaji/name/:name', viewLaporanGajiPegawaiByName);
router.get('/laporan/gaji/month/:month', viewLaporanGajiPegawaiByMonth);
router.get('/laporan/gaji/year/:year', viewLaporanGajiPegawaiByYear);
// Laporan Absensi Pegawai
router.get('/laporan/absensi/month/:month', viewLaporanAbsensiPegawaiByMonth);
router.get('/laporan/absensi/year/:year', viewLaporanAbsensiPegawaiByYear);
// Slip Gaji Pegawai
router.get('/laporan/slip_gaji/name/:name', viewSlipGajiByName);
router.get('/laporan/slip_gaji/month/:month', viewSlipGajiByMonth);
router.get('/laporan/slip_gaji/year/:year', viewSlipGajiByYear);

/* ==== Ubah Password ==== */
router.patch('/change_password', changePassword);

/* ==== Logout ==== */
router.delete('/logout', LogOut);

// Pegawai Route :
/* ==== Dashboard ==== */
router.get('/dashboard',  dashboardPegawai);
/* ==== Data Gaji ==== */
router.get('/data_gaji/month/:month', viewDataGajiSinglePegawaiByMonth);
router.get('/data_gaji/year/:year', viewDataGajiSinglePegawaiByYear);
/* ==== Ubah Password ==== */
router.patch('/change_password', changePassword);
/* ==== Logout ==== */
router.delete('/logout', LogOut);


export default router;