<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $secretKey = "{{site.SITE_KEY}}";
    $captchaResponse = $_POST["g-recaptcha-response"];

    if (!$captchaResponse) {
        echo json_encode(["success" => false, "message" => "reCAPTCHA wajib diisi."]);
        exit;
    }

    // Verifikasi ke Google
    $verifyURL = "https://www.google.com/recaptcha/api/siteverify";
    $response = file_get_contents("$verifyURL?secret=$secretKey&response=$captchaResponse");
    $responseData = json_decode($response);

    if ($responseData->success) {
        // Tambahkan validasi username/password di database di sini
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Verifikasi reCAPTCHA gagal."]);
    }
}
?>