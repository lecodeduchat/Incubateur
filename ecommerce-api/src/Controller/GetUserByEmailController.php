<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class GetUserByEmailController extends AbstractController
{
    #[Route('/user/{email}', name: 'get_user_by_email', methods: ['GET'])]
    public function getUserByEmail(
        UserRepository $userRepository,
        string $email
    ): Response {
        $email = urldecode($email);
        // echo  "Email test : " . $email;
        $user = $userRepository->findByEmail($email);
        return $this->json($user);
    }
}
