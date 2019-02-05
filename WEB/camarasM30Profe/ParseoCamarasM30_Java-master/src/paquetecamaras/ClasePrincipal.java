package paquetecamaras;

import java.util.ArrayList;

public class ClasePrincipal {

	public static void main(String[] args) {
		ArrayList<Camara> lista_camaras=ParseoXML.parsear();
		for (Camara camara : lista_camaras) {
			System.out.println(camara);
		}
	}

}
