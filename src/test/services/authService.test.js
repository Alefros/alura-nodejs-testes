import { describe } from "@jest/globals";
import bcryptjs from 'bcryptjs';
import AuthService from '../../services/authService';
import Usuario from '../../models/usuario';

const authService = new AuthService();

describe('Testando a authService.cadastrarUsuario', () => {
  it('O usuário deve possuir um nome, e-mail e senha', async () => {
    // arrage
    const usuarioMock = {
      nome: 'Raphael',
      email: 'raphael@teste.com.br',
    };

    // act
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

    // assert
    await expect(usuarioSalvo).rejects.toThrowError('A senha de usuário é obrigatório!');
  });
});